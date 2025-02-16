import { CheckIcon } from "assets/icons";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { networks } from "wagmi/networks";
import SharpBorder from "assets/svg/sharpBorder.svg";
import { cn } from "lib/utils";
import { buttonVariants } from "components/shared/Button";
export default function SuccessTx() {
    const { hash } = useParams();

    const [searchParams] = useSearchParams();
    const network = searchParams.get("network");
    return (
        <section className="bg-background max-w-[732px] mx-auto lg:mt-sp16 mt-sp12 mb-11">
            <div className="relative border-x border-t border-gray-700  flex flex-col items-center rounded-t-xl pt-sp8 gap-sp11  px-sp7">
                <span className="rounded-full p-sp9 bg-gray-900">
                    <CheckIcon className="text-secondary w-full" />
                </span>
                <div className="space-y-sp5 text-center">
                    <span className="caption-1 font-bold text-secondary">
                        Grate Job!
                    </span>

                    <h6 className="title-1 bold">Transaction Was Successful</h6>

                    <p className="text-gray-200 max-w-[347px]">
                        Your transaction successfully sent, it will be processed
                        if everything is correct
                    </p>
                </div>
                <div className="w-full space-y-2 pb-[10px]">
                    <Link
                        className={cn(
                            "w-full",
                            buttonVariants({ variant: "secondary" }),
                        )}
                        target="_blank"
                        to={`${networks[network ?? "amoy"].explorer}/${hash}`}
                    >
                        See Transaction ID
                    </Link>
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
