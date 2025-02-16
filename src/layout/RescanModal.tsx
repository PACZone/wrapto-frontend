import { getRescanHash } from "api/services/Rescan";
import axios from "axios";
import { Button } from "components/shared/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "components/shared/Dialog";
import Spinner from "components/shared/Spinner";
import { TextField } from "components/shared/TextField";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReScanModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [hashValue, setHashValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const res = await getRescanHash(hashValue);
            setHashValue("");
            navigate(
                `/rescan-result?message=${res.data.message}&status=${res.data.status}`,
            );
        } catch (error) {
            setHashValue("");
            if (axios.isAxiosError(error) && error.response) {
                navigate(
                    `/rescan-result?message=${error.response.data.message}&status=${error.response.data.status}`,
                );
            } else {
                console.error("Unexpected error:", error);
            }
        } finally {
            setIsLoading(false);
            onClose();
        }
    };

    return (
        <Dialog onOpenChange={onClose} open={isOpen} data-lenis-prevent>
            <DialogContent
                data-lenis-prevent
                className="flex flex-col gap-sp8 overflow-y-auto"
            >
                <DialogHeader>
                    <DialogTitle className="text-primary text-center">
                        Rescan
                    </DialogTitle>
                </DialogHeader>
                <main className="flex flex-col gap-sp8">
                    <DialogDescription>
                        If you have missed or failed bridge, put your
                        bridge id here and retry for Bridge. If it was
                        unsuccessful again, contact us at{" "}
                        <a
                            href="mailto:hi@dezh.tech"
                            className="text-secondary"
                        >
                            hi@dezh.tech
                        </a>
                    </DialogDescription>
                </main>
                <DialogFooter>
                    <form
                        className="w-full space-y-sp8"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            onChange={e => setHashValue(e.target.value)}
                            className="bg-background"
                            label="Enter your bridge id"
                            placeholder="Example: 4vCVIuUyHO"
                        />
                        <Button
                            disabled={!hashValue || isLoading}
                            type="submit"
                            className="w-full"
                            variant="secondary"
                        >
                            {isLoading ? (
                                <div className="flex py-sp11 justify-center">
                                    <Spinner />
                                </div>
                            ) : (
                                "Scan"
                            )}
                        </Button>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ReScanModal;
