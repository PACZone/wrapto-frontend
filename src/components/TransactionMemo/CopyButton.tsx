import {
    TooltipArrow,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
    Tooltip,
} from "components/shared/Tooltip";
import { CopyIcon } from "assets/icons";
import { Button } from "components/shared/Button";
import { handleCopy } from "lib/utils";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
    const [isCopy, setIsCopy] = useState(false);

    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip open={isCopy}>
                <TooltipTrigger className="w-full">
                    <Button
                        onClick={() => {
                            setIsCopy(true);
                            setTimeout(() => {
                                setIsCopy(false);
                            }, 2000);
                            handleCopy(text ?? "");
                        }}
                        size="default"
                        className="text-white flex gap-sp1 items-center w-full"
                    >
                        <CopyIcon />
                        <span>Copy</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent >
                    <TooltipArrow className="TooltipArrow" />
                    <p className="text-white">Copied!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
