import { CheckIcon, XIcon } from "assets/icons";
import { Link, useSearchParams } from "react-router-dom";
import SharpBorder from "assets/svg/sharpBorder.svg";
import { cn } from "lib/utils";
import { Button, buttonVariants } from "components/shared/Button";
import ReScanModal from "layout/RescanModal";
import { useState } from "react";
export default function RescanResult() {
    const [reScanModalOpen, setReScanModalOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const message = searchParams.get("message");
    const status = searchParams.get("status");
    const isSuccess = status === "200";
    return (
        <section className="bg-background max-w-[732px] mx-auto lg:mt-sp16 mt-sp12 mb-11">
            <div className="relative border-x border-t border-gray-700  flex flex-col items-center rounded-t-xl pt-sp8 gap-sp11  px-sp7">
                <span className="rounded-full p-sp9 bg-gray-900">
                    {isSuccess ? (
                        <CheckIcon className="text-secondary w-full" />
                    ) : (
                        <XIcon className="text-[#FF4800] w-full" />
                    )}
                </span>
                <div className="space-y-sp5 text-center">
                    <span
                        className={cn("caption-1 font-bold", {
                            " text-secondary": isSuccess,
                            " text-[#FF4800]": !isSuccess,
                        })}
                    >
                        {isSuccess ? "Grate Job!" : "We are Sorry :("}
                    </span>

                    <h6 className="title-1 bold">
                        {isSuccess
                            ? "Your Rescan Was Successful"
                            : " Your Rescan Was’t Successful"}
                    </h6>

                    <p className="text-gray-200 break-all max-w-[347px]">
                        {message}
                    </p>
                </div>
                <div className="w-full space-y-2 pb-[10px]">
                    <ReScanModal
                        onClose={() => setReScanModalOpen(false)}
                        isOpen={reScanModalOpen}
                    />
                    <Button
                        onClick={() => setReScanModalOpen(true)}
                        className="w-full"
                        variant={"secondary"}
                        size={"lg"}
                    >
                        Try again
                    </Button>
                    <Link
                        className={cn(
                            "w-full",
                            buttonVariants({ variant: "outline" }),
                        )}
                        to="/"
                    >
                        Back to Home
                    </Link>
                </div>
                <div className="bg-background h-1  z-10 absolute -bottom-1 w-full "></div>
            </div>
            <img
                src={SharpBorder}
                alt="SharpBorder"
                className="w-full  relative "
            />
        </section>
    );
}
