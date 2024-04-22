import { ArrowsUpDown } from "assets/icons";
import TransferBox from "../TransferBox";
import { useReadContract } from "wagmi";
import { abi } from "./abi";
import { ContractAddressT, networks } from "wagmi/networks";
import { cn, unDecimal } from "lib/utils";
import { Button } from "components/shared/Button";
import data from "../data.json";
import { useTransferBoxContext } from "context/TransferBoxContext";

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
    } = useTransferBoxContext();

    const { data: contractData } = useReadContract({
        abi,
        address: networks[network].contractAddress,
        functionName: "balanceOf",
        args: [address],
    });

    const maxContract = contractData ? unDecimal(Number(contractData)) : 0;

    const handlePaste = async () => {
        await navigator.clipboard.readText().then(text => {
            setTransferTo(text);
        });
    };

    const handleToggle = () => {
        setIsFromPac(!isFromPac);
        setAnimationKey(prevKey => prevKey + 1);
    };

    const handleMax = () => {
        setTransferFrom(maxContract);
    };

    return (
        <>
            <div className="space-y-sp7">
                <div>
                    <TransferBox
                        key={animationKey}
                        onChange={e => {
                            const value = e.target.value;
                            setTransferFrom(Number(value));
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
                        selectItems={isFromPac ? data.pactus : data.companies}
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
                        key={animationKey + 1}
                        onChange={e => setTransferTo(e.target.value)}
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
                        selectItems={isFromPac ? data.companies : data.pactus}
                        label={`Destination address in ${!isFromPac ? "Polygon" : "Pactus"} network`}
                        placeholder="EX: pc1zzzvlcqge523yg8re8hgnk72jsfdatncusmf6uy"
                    />
                </div>
            </div>
            <p className={cn("body-2 text-white transition-all duration-300")}>
                Polygon gas fee ~ 0.0017 ETH <br /> Bridge fee = 1 PAC
            </p>
        </>
    );
}
