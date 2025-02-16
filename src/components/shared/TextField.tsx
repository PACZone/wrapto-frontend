import * as React from "react";
import { cn } from "lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { IconButton } from "./IconButton";
import { CloseIcon } from "assets/icons";
import clsx from "clsx";

const TextFieldVariants = cva(
    "rounded-xl bg-transparent  body-1 font-normal  flex gap-sp2  items-center px-sp5 appearance-none group-focus:ring-gray-700 group-hover:ring-gray-700  text-absolute-white  group-hover:[&>input]:placeholder:text-absolute-white [&>input]:text-absolute-white  [&>input]:placeholder:text-gray-400  body-1 leading-[24px] outline-none   ring-[1.5px] ring-gray-900  focus-visible:ring-primary-500 hover:ring-gray-700  !focus:ring-primary-500  [&>svg]:stroke-primary-500 [&>svg]:fill-primary-500 disabled:placeholder:gray-300 disabled:text-gray-300 disabled:ring-gray-300 m-0 mt-0 transition-all",
    {
        variants: {},
        defaultVariants: {},
    },
);

export interface TextFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof TextFieldVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    closeIcon?: boolean;
    status?: "error" | "success" | "contained" | "default";
    helperText?: string | React.ReactNode;
    label?: string;
    password?: boolean;
    leading?: React.ReactElement | string;
    fieldOnTop?: boolean;
    labelClasses?: string;
    inputClasses?: string;
    parentClasses?: string;
    leadingClasses?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            parentClasses,
            inputClasses,
            labelClasses,
            leadingClasses,
            leading,
            fieldOnTop,
            status,
            disabled,
            helperText,
            leftIcon,
            rightIcon,
            className,
            type,
            id,
            label,
            onChange,
            closeIcon = true,
            onFocus,
            onBlur,
            ...props
        },
        ref,
    ) => {
        const [localValue, setLocalValue] = React.useState(props.value);
        const customOnchange = (e: React.ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(e);
        React.useEffect(() => {
            setLocalValue(props.value);
        }, [props.value]);

        const [isFocused, setIsFocused] = React.useState<boolean>(false);
        const helperTextClasses = clsx(
            "caption-1 font-bold text-gray-400 animate-fade-up transition-all duration-700",
        );

        return (
            <div className={` group space-y-sp2  ${parentClasses || ""}`}>
                {label && (
                    <label
                        className={`block text-white text-start body-2  font-light
              ${labelClasses || ""}`}
                        htmlFor={id || `input-wrapto-${label}`}
                    >
                        {label}
                    </label>
                )}
                <div className={` ${leading ? "flex items-center" : ""}`}>
                    {leading && (
                        <div
                            className={cn(
                                "max-w-fit w-fit !rounded-r-none text-gray-600",
                                {
                                    "!rounded-b-none": fieldOnTop,
                                    " ring-[1.5px] focus:ring-[1.5px]  ring-primary-500  text-gray-950":
                                        isFocused,
                                    " ring-additional-error focus-visible:ring-additional-error   focus:ring-additional-error":
                                        !disabled && status === "error",
                                    " !ring-additional-success hover:!ring-additional-success focus-visible:ring-additional-success   focus:ring-additional-success ":
                                        !disabled && status === "success",
                                    "ring-gray-300 focus-visible:ring-gray-300  focus:ring-gray-300":
                                        !disabled && status === "contained",
                                },
                                leadingClasses,
                            )}
                        >
                            {leading}
                        </div>
                    )}
                    <div
                        className={cn(
                            TextFieldVariants({ className }),
                            "w-full group-focus:!ring-primary-500",
                            {
                                " !rounded-l-none ": leading,
                                "!rounded-b-none": fieldOnTop,
                                " !ring-primary-500 ": isFocused && !status,
                                " !ring-additional-error focus-visible:!ring-additional-error   focus:!ring-additional-error":
                                    !disabled && status === "error",
                                " ring-additional-success focus-visible:ring-additional-success  hover:!ring-additional-success group-focus:!ring-additional-success  focus:ring-additional-success ":
                                    !disabled && status === "success",
                                "ring-gray-300 focus-visible:ring-gray-300  focus:ring-gray-300 group-hover:ring-gray-300 hover:!ring-gray-300":
                                    !disabled && status === "contained",
                            },
                        )}
                    >
                        {leftIcon && !leading && (
                            <span className={`flex items-center text-gray-400`}>
                                {leftIcon}
                            </span>
                        )}

                        <input
                            autoComplete="off"
                            onBlur={e => {
                                setIsFocused(false);
                                onBlur && onBlur(e);
                            }}
                            onFocus={e => {
                                setIsFocused(true);
                                onFocus && onFocus(e);
                            }}
                            disabled={disabled}
                            id={id || `input-wrapto-${label}`}
                            className={`py-sp4 h-sp10 disabled:text-gray-300 text-absolute-white autofill:text-absolute-white appearance-none ring-0 outline-none ring-none bg-background  w-full focus:placeholder:text-gray-400
                ${inputClasses || ""}`}
                            type={type}
                            ref={ref}
                            value={localValue}
                            onChange={e => {
                                setLocalValue(e.target.value);
                                customOnchange(e);
                            }}
                            {...props}
                        />

                        <div className="flex gap-sp2">
                            {closeIcon &&
                                !!localValue &&
                                !disabled &&
                                !props.readOnly && (
                                    <span
                                        className={` flex items-center justify-end  [&>svg]:size-sp7 text-absolute-white`}
                                    >
                                        <>
                                            <IconButton
                                                type="button"
                                                disabled={disabled}
                                                onClick={() => {
                                                    setLocalValue("");
                                                    // inputRef.current.value = "";
                                                    customOnchange({
                                                        target: {
                                                            value: "",
                                                        },
                                                    } as React.ChangeEvent<HTMLInputElement>);
                                                }}
                                            >
                                                <CloseIcon className="text-current stroke-current fill-current" />
                                            </IconButton>
                                        </>
                                    </span>
                                )}
                            {rightIcon && !leading && (
                                <span
                                    className={`flex items-center  justify-end ${
                                        isFocused && !disabled
                                            ? "text-gray-700"
                                            : !disabled
                                              ? "text-gray-500"
                                              : "text-gray-300"
                                    }  
               `}
                                >
                                    {rightIcon}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {helperText && (
                    <div className={helperTextClasses}>{helperText}</div>
                )}
            </div>
        );
    },
);
TextField.displayName = "TextField";
export { TextField, TextFieldVariants };
