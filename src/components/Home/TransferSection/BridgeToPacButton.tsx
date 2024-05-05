import { Button } from "components/shared/Button";
import { networks } from "wagmi/networks";
import { abi } from "./abi";
import { BaseError, useWriteContract } from "wagmi";
import { useNavigate } from "react-router-dom";
import { pactusValidator } from "lib/utils";

import { useTransferBoxContext } from "context/TransferBoxContext";

export default function BridgeButton({ disabled }: { disabled: boolean }) {
    const { writeContract, error, isPending, data: hash } = useWriteContract();
    const {
        network,
        transferFrom,
        transferTo,
        setTransferToError,
        setTransferFromError,
    } = useTransferBoxContext();

    const navigate = useNavigate();
    if (hash && !isPending) {
        navigate(`/tx/success/${hash}?network=${network}`);
        return null;
    }

    const handleBridge = () => {
        const num = transferFrom ? +transferFrom * 10 ** 9 : 0;
        if (!Number.isInteger(num))
            return setTransferFromError(
                "Decimal value is too large. Please enter a smaller number.",
            );

        if (!transferTo) return setTransferToError("This field is required!");
        if (!transferFrom)
            return setTransferFromError("This field is required!");
        if (!pactusValidator(transferTo.toLocaleString())) {
            return setTransferToError("Value is not valid!");
        }

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
