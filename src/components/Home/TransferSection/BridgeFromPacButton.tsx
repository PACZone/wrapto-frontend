import { Button } from "components/shared/Button";
import { BridgeButtonProps } from "types/bridgeButton";

export default function BridgeFromPacButton({
    transferFrom,
    transferTo,
}: BridgeButtonProps) {
    console.log(transferFrom, transferTo);
    return (
        <Button type="submit" variant="secondary"  className="w-full">
            Bridge
        </Button>
    );
}
