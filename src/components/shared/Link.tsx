import React from "react";
import { cn } from "../../lib/utils";
import { Link as RouterLink, To } from "react-router-dom";
// import { cn } from "../../lib/utils";

type LinksT = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "default" | "secondary";
    to: To;
};

const Link: React.FC<LinksT> = ({
    variant = "default",
    children,
    className,
    to,
    ...restProps
}) => {
    return (
        <RouterLink
            to={to}
            draggable={false}
            className={cn(
                "transition-all duration-300 border-b border-transparent  ",
                {
                    "list-item list-disc marker:text-primary  hover:border-primary":
                        variant === "primary",
                    "list-item list-disc ": variant === "secondary",
                    "hover:border-primary":
                        variant === "default" || variant === "secondary",
                },
                className,
            )}
            {...restProps}
        >
            {children}
        </RouterLink>
    );
};

export default Link;
