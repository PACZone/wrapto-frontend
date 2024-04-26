import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full  px-2 py-[5px]  body-1  transition-colors focus:outline-none ",
    {
        variants: {
            variant: {
                default: "border-transparent bg-gray-800",
                secondary: "border-transparent bg-secondary",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
