import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "components/shared/Dialog";
import { Button } from "../../shared/Button";
import { Checkbox } from "components/shared/Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BridgeButtonProps } from "types/bridgeButton";

export default function BridgeFromPacButton({
    transferFrom,
    transferTo,
}: BridgeButtonProps) {
    const [isAgree, setIsAgree] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <Dialog data-lenis-prevent>
            <DialogTrigger asChild>
                <Button type="submit" className="w-full" variant="secondary">
                    Bridge
                </Button>
            </DialogTrigger>
            <DialogContent data-lenis-prevent className="flex flex-col gap-sp8">
                <DialogHeader>
                    <DialogTitle className="text-error text-center">
                        Instructions
                    </DialogTitle>
                </DialogHeader>
                <main className="flex flex-col gap-sp8">
                    <DialogDescription>
                        If your Destination address on the Polygon network is
                        incorrect, there is a possibility that the amount of
                        Pactus you are transferring will be lost, and we will
                        not be able to assist with it. Therefore, please ensure
                        complete accuracy when entering the address.
                    </DialogDescription>
                    <Checkbox
                        onCheckedChange={(value: boolean) => {
                            setIsAgree(value);
                        }}
                        id="agree-terms"
                        label={"I read completely and agree to your terms"}
                    />
                </main>
                <DialogFooter>
                    <Button
                        onClick={() =>
                            navigate(
                                `/transactionMemo?transferFrom=${transferFrom}&transferTo=${transferTo}`,
                            )
                        }
                        className="w-full"
                        disabled={!isAgree}
                        variant="secondary"
                    >
                        Accept
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
