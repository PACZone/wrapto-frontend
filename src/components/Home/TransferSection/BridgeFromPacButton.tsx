import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "components/shared/Dialog";
import { Button } from "../../shared/Button";
import { Checkbox } from "components/shared/Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { polygonValidator } from "lib/utils";
import { useTransferBoxContext } from "context/TransferBoxContext";

export default function BridgeFromPacButton({
    disabled,
}: {
    disabled?: boolean;
}) {
    const [isAgree, setIsAgree] = useState<boolean>(false);
    const navigate = useNavigate();
    const {
        transferFrom,
        transferTo,
        setTransferToError,
        setTransferFromError,
        network
    } = useTransferBoxContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenDialog = () => {
        if (!transferFrom)
            return setTransferFromError("This field is required!");
        if (!transferTo) return setTransferToError("This field is required!");

        if (!polygonValidator(transferTo.toLocaleString())) {
            return setTransferToError("Value not valid!");
        }
        setIsOpen(true);
    };
    return (
        <Dialog
            open={isOpen}
            onOpenChange={value => setIsOpen(value)}
            data-lenis-prevent
        >
            <Button
                onClick={handleOpenDialog}
                disabled={disabled}
                type="submit"
                className="w-full"
                variant="secondary"
            >
                Bridge
            </Button>
            <DialogContent
                data-lenis-prevent
                className="flex flex-col gap-sp8 overflow-y-auto"
            >
                <DialogHeader>
                    <DialogTitle className="text-danger text-center">
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
                        onClick={() => {
                            if (polygonValidator(transferTo.toLocaleString())) {
                                navigate(
                                    `/transactionMemo?transferTo=${transferTo}&amount=${transferFrom}&network=${network}`,
                                );
                            }
                        }}
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
