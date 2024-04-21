import { Button } from "components/shared/Button";
import { networks } from "wagmi/networks";
import { abi } from "./abi";
import { BaseError, useWriteContract } from "wagmi";
import { useNavigate } from "react-router-dom";
import { BridgeButtonProps } from "types/bridgeButton";

export default function BridgeButton({
    transferFrom,
    disabled,
    transferTo,
    network,
}: BridgeButtonProps) {
    const { writeContract, error, isPending, data: hash } = useWriteContract();
    const navigate = useNavigate();
    if (hash && !isPending) {
        navigate(`/tx/success/${hash}?network=${network}`);
        return null;
    }

    const handleBridge = () => {
        const num = transferFrom ? +transferFrom * 10 ** 9 : 0;
        writeContract({
            abi,
            address: networks[network].contractAddress,
            functionName: "bridge",
            args: [transferTo, num.toString()],
        });
    };

    return (
        <>
            <Button
                disabled={disabled}
                isLoading={isPending}
                type="submit"
                variant="secondary"
                className="w-full"
                onClick={handleBridge}
                onSubmit={handleBridge}
            >
                Bridge
            </Button>
            {error && (
                <p className="text-red-500 animate-fade-up transition-all duration-300 mt-sp7">
                    Error: {(error as BaseError).shortMessage || error.message}
                </p>
            )}
        </>
    );
}
