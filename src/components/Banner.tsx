import { FillInfoCircleIcon } from "assets/icons";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import { buttonVariants } from "./shared/Button";
import { Link } from "react-router-dom";

const BannerVariants = cva(
    " flex items-center  px-sp11 py-sp5 flex gap-sp7 items-center justify-between animate-fade-right",
    {
        variants: {
            variant: {
                error: "text-white bg-error",
                success: "text-gray-950 bg-secondary ",
                warning: " text-gray-950 bg-[#E29F3A]",
                away: "text-white bg-[#3A55E2]  ",
            },
        },
        defaultVariants: {
            variant: "success",
        },
    },
);
export type BannerVariantType = VariantProps<typeof BannerVariants>["variant"];
interface BannerProps {
    variant?: BannerVariantType;
    className?: string;
    title: string;
    description: string;
    href: string;
}

const Banner = ({
    variant,
    className,
    title,
    description,
    href,
}: BannerProps) => {
    return (
        <div className={cn(BannerVariants({ variant }), className)}>
            <span>
                <FillInfoCircleIcon className="text-current" />
            </span>
            <div className="grow">
                <p className="title-2 font-bold">{title}</p>
                <p className="body-2">{description}</p>
            </div>
            <Link
                to={href}
                className={cn(buttonVariants({ variant: "default",size:"md" }),'max-w-fit !px-sp2')}
            >
                Learn More
            </Link>
        </div>
    );
};

export default Banner;
