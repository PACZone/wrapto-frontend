import React from "react";
import { cn } from "../../lib/utils";
import { Link as RouterLink, To } from "react-router-dom";
import { EllipseIcon } from "assets/icons";
import { cva, VariantProps } from "class-variance-authority";
// import { cn } from "../../lib/utils";

export const linkVariants = cva(
    "flex gap-[10px] items-center bg-transparent text-primary  whitespace-nowrap transition-colors duration-300 border-b border-transparent ",
    {
        variants: {
            variant: {
                primary: "hover:border-primary",
                secondary: "hover:border-secondary",
            },
            // size: {
            //     default: "",
            // },
        },
        defaultVariants: {
            variant: "primary",
            // size:"default"
        },
    },
);
export const ellipseVariants = cva("", {
    variants: {
        variant: {
            // default: "hover:border-primary",
            primary: "text-primary",
            secondary: "text-secondary",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});


export interface LinksProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof linkVariants> {
    to: To;
    variantType?: "link";
}

const Link: React.FC<LinksProps> = ({
    variant = "primary",
    children,
    className,
    to,
    ...restProps
}) => {
    return (
        <RouterLink
            to={to}
            draggable={false}
            // className={cn(
            //     "flex gap-[11px] items-center transition-all duration-300  ",

            //     className,
            // )}
            className={cn(linkVariants({ variant, className }))}
            {...restProps}
        >
            <span>
                <EllipseIcon className={cn(ellipseVariants({ variant }))} />
            </span>
            <>{children}</>
        </RouterLink>
    );
};

export default Link;
