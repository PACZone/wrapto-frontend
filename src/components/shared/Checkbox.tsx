import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "lib/utils";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
        label?: string | React.ReactNode;
    }
>(({ className, label, ...props }, ref) => (
    <div className="flex gap-sp2">
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                "peer size-sp7 shrink-0 rounded-lg  ring-[1.5px] bg-gray-700 ring-gray-500 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:ring-0 data-[state=checked]:bg-secondary data-[state=checked]:text-background",
                className,
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className={cn("flex items-center justify-center text-current")}
            >
                <Check className="size-sp5" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <label className="text-gray-50 cursor-pointer font-thin" htmlFor={props.id}>
            {label}
        </label>
    </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
