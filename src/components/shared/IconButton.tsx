import React from "react";
import { cn } from "lib/utils";
export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}
function IconButton({ className, children, ...props }: IconButtonProps) {
    return (
        <button
            className={cn(
                className,
                "appearance-none flex items-center justify-center",
            )}
            {...props}
        >
            {children}
        </button>
    );
}

IconButton.displayName = "IconButton";

export { IconButton };
