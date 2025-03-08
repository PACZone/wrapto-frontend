import { ArrowsUpDown } from "assets/icons";
import TransferBox from "../TransferBox";
import { useReadContract } from "wagmi";
import { abi } from "./abi";
import { ContractAddressT, networks } from "wagmi/networks";
import { cn, handleFee, unDecimal } from "lib/utils";
import { Button } from "components/shared/Button";
import data from "../data.json";
import { useTransferBoxContext } from "context/TransferBoxContext";
import { useEffect } from "react";

type TransferBoxesProps = {
    address?: ContractAddressT;
    isConnected: boolean;
};

export default function TransferBoxes({
    isConnected,
    address,
}: TransferBoxesProps) {
    const {
        network,
        transferFrom,
        setTransferFrom,
        transferTo,
        setTransferTo,
        setIsFromPac,
        setAnimationKey,
        animationKey,
        isFromPac,
        transferToError,
        transferFromError,
        setTransferToError,
        setTransferFromError,
    } = useTransferBoxContext();

    useEffect(() => {
        isFromPac && address && setTransferTo(address.toString());
    }, [isFromPac]);

    const { data: contractData } = useReadContract({
        abi,
        address: networks[network].contractAddress,
        functionName: "balanceOf",
        args: [address],
    });
    const maxContract = contractData ? unDecimal(Number(contractData)) : 0;
    const fee = handleFee(+transferFrom);

    const handlePaste = async () => {
        await navigator.clipboard.readText().then(text => {
            setTransferTo(text);
        });
    };
    const handleToggle = () => {
        setIsFromPac(!isFromPac);
        setTransferToError("");
        setTransferFromError("");
        setTransferFrom("");
        setTransferTo("");
        setAnimationKey(prevKey => prevKey + 1);
    };

    const handleMax = () => {
        setTransferFrom(maxContract - fee);
    };

    return (
        <>
            <div className="space-y-sp7">
                <div>
                    <TransferBox
                        errorText={transferFromError}
                        key={animationKey}
                        onChange={e => {
                            const num = isNaN(e.target.valueAsNumber)
                                ? undefined
                                : e.target.valueAsNumber;
                            if (num && !isFromPac) {
                                if (num > maxContract || num > 24000000) {
                                    return setTransferFromError(
                                        "Burn amount exceeds balance",
                                    );
                                }
                            }

                            setTransferFromError("");
                            setTransferFrom(Number(num));
                        }}
                        leading={isFromPac ? "PAC" : "wPAC"}
                        value={transferFrom}
                        inputType="number"
                        actionButton={
                            !isFromPac && isConnected ? (
                                <Button size="default" onClick={handleMax}>
                                    Max
                                </Button>
                            ) : undefined
                        }
                        helperText={
                            !isFromPac
                                ? `Balance: ${maxContract ?? 0} wPAC`
                                : undefined
                        }
                        title="Transfer From"
                        selectItems={isFromPac ? data.pactus : data.networks}
                        placeholder="0"
                        label="Amount"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className=" bg-gray-800 p-[10px] rounded-[9px] text-white "
                        onClick={handleToggle}
                    >
                        <span className="sr-only">arrows-up-down</span>
                        <ArrowsUpDown
                            key={animationKey + 5}
                            className="animate-rotate-x animate-duration-[1000ms]"
                        />
                    </button>
                </div>
                <div>
                    <TransferBox
                        defaultValue={
                            isFromPac ? address?.toString() : undefined
                        }
                        errorText={transferToError}
                        key={animationKey + 1}
                        onChange={e => {
                            setTransferToError("");
                            setTransferTo(e.target.value);
                        }}
                        value={transferTo}
                        actionButton={
                            <Button
                                size="default"
                                type="button"
                                onClick={handlePaste}
                            >
                                Paste
                            </Button>
                        }
                        title="Transfer To"
                        selectItems={isFromPac ? data.networks : data.pactus}
                        label={`Destination address in ${isFromPac ? " Polygon mainnet" : "Pactus mainnet"} network`}
                        placeholder={
                            !isFromPac
                                ? "Example: pc1zzzvlcqge523yg8re8hgnk72jsfdatncusmf6uy"
                                : "Example: 0xa6a9Def75CA1339CbE514778948A1D67D826D8AA "
                        }
                    />
                </div>
            </div>
            <p className={cn("body-2 text-white transition-all duration-300")}>
                Bridge fee = {transferFrom ? fee : 0} PAC <br />
                <span className="text-gray-300 mt-1">
                    (Bridge fee in Min 1 pac and Max 5 Pac)
                </span>
            </p>
        </>
    );
}
