// "use client";
// import { cn } from "lib/utils";
// import React, { forwardRef } from "react";

// import { motion } from "framer-motion";
// import { CloseIcon, InfoCircle } from "assets/icons";

// type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
//   rightIcon?: React.ReactNode;
//   leftIcon?: React.ReactNode;
//   status?: "error";
//   helperText?: string;
//   label?:string;
// };

// const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
//   (
//     {
//       label,
//       className,
//       rightIcon,
//       leftIcon,
//       onBlur,
//       status,
//       helperText,
//       onFocus,
//       onChange,
//       ...props
//     },
//     ref
//   ) => {
//     // const inputRef = useRef<HTMLInputElement>(null);
//     // const [localValue, setLocalValue] = React.useState<any>(props.value ?? null);
//     const [localValue, setLocalValue] = React.useState(props.value);
//     const [isFocused, setIsFocused] = React.useState<boolean>(false);
//     // const customOnchange = (e: any) => onChange && onChange(e);
//     const internalOnChange = (e: any) => onChange && onChange(e);
//     React.useEffect(() => {
//       setLocalValue(props.value);
//     }, [props.value]);
//     // console.log(localValue);
//     return (
//       <div className="space-y-sp2">
//         <label className="body-2 text-gray-100" htmlFor={props.name}>{label}</label>
//         <div
//           className={cn(
//             `group  flex w-full bg-transparent px-sp4 border-b-[1.5px] border-gray-600
//       ${
//         isFocused
//           ? "after:w-full after:left-0 [&>input]:placeholder:text-absolute-white"
//           : "after:-left-20 after:w-0 hover:after:left-0 hover:after:w-[10%] [&>input]:placeholder:text-gray-200"
//       }
//     relative z-[2] duration-300 transition-all  after:h-[1.5px] after:transition-all after:duration-300
//       after:content-[' '] after:block after:absolute after:z-[-1] after:bottom-0 group-focus:after:left-0  `,
//             {
//               " after:bg-additional-error": status === "error",
//               " after:bg-primary-500": !status,
//             }
//           )}
//         >
//           {leftIcon && <div>{leftIcon}</div>}

//           <input
//             ref={ref}
//             className={cn(
//               "text-absolute-white w-full bg-transparent  py-sp5  title-2 ring-0 outline-none",
//               { className }
//             )}
//             onBlur={(e) => {
//               setIsFocused(false);
//               onBlur && onBlur(e);
//             }}
//             onFocus={(e) => {
//               setIsFocused(true);
//               onFocus && onFocus(e);
//             }}
//             value={localValue}
//             onChange={(e) => {
//               setLocalValue(e.target.value);
//               internalOnChange(e);
//             }}
//             {...props}
//           />
//           {localValue && (
//             <button
//               className="focus-within:ring-0 outline-none"
//               onClick={() => {
//                 // inputRef.current?.focus();
//                 setLocalValue("");
//                 internalOnChange({
//                   target: {
//                     value: "",
//                   },
//                 });
//               }}
//             >
//               <CloseIcon />
//             </button>
//           )}
//           {rightIcon && <div>{rightIcon}</div>}
//         </div>
//         {helperText && (
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className={cn("body-1 flex gap-sp1", {
//               "text-additional-error": status === "error",
//               "text-gray-950": !status,
//             })}
//           >
//             <span>
//               <InfoCircle />
//             </span>
//             {helperText}
//           </motion.p>
//         )}
//       </div>
//     );
//   }
// );
// TextField.displayName = "TextField";

// export default TextField;

import * as React from "react";
import { cn } from "lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
// import { InfoCircle } from "../assets/icons/InfoCircle";
import clsx from "clsx";

import { IconButton } from "./IconButton";
import { CloseIcon, InfoCircle } from "assets/icons";

const TextFieldVariants = cva(
  "rounded-xl bg-transparent  body-1 font-normal  flex gap-sp2  items-center px-sp5 appearance-none group-focus:ring-gray-700 group-hover:ring-gray-700  text-absolute-white  group-hover:[&>input]:placeholder:text-absolute-white [&>input]:text-absolute-white  [&>input]:placeholder:text-gray-400  body-1 leading-[24px] outline-none   ring-[1.5px] ring-gray-900  focus-visible:ring-primary-500 hover:ring-gray-700  !focus:ring-primary-500  [&>svg]:stroke-primary-500 [&>svg]:fill-primary-500 disabled:placeholder:gray-300 disabled:text-gray-300 disabled:ring-gray-300 m-0 mt-0 transition-all",
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof TextFieldVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  closeIcon?: boolean;
  status?: "error" | "success" | "contained" | "default";
  helperText?: string;
  label?: string;
  password?: boolean;
  leading?: React.ReactElement | string;
  fieldOnTop?: boolean;
  labelClasses?: string;
  inputClasses?: string;
  parentClasses?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      parentClasses,
      inputClasses,
      labelClasses,
      leading,
      fieldOnTop,
      status,
      password,
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
    ref
  ) => {
    const [localValue, setLocalValue] = React.useState(props.value);
    const customOnchange = (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange && onChange(e);
    // const inputRef = ref || React.useRef<HTMLInputElement>(null!);
    React.useEffect(() => {
      setLocalValue(props.value);
    }, [props.value]);

    // React.useImperativeHandle(ref, () => inputRef.current, []);
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const helperTextClasses = clsx("flex gap-sp1 items-center", {
      " text-gray-300 [&>span>svg]:fill-gray-300": disabled,
      " text-additional-error  [&>span>svg]:fill-additional-error":
        !disabled && status === "error",
      " text-additional-success  [&>span>svg]:fill-additional-success":
        !disabled && status === "success",
      " text-gray-300  [&>span>svg]:fill-gray-700":
        !disabled && status === "contained",
      "text-gray-700 [&>span>svg]:fill-gray-500":
        !disabled && status === "default",
      " text-primary-500 [&>span>svg]:fill-primary-500 ":
        !disabled && (!status || status === "default") && isFocused,
      " text-gray-700 [&>span>svg]:fill-gray-500": !status && !disabled,
    });
    return (
      <div className={` group space-y-sp2  ${parentClasses || ""}`}>
        {label && (
          <label
            className={`block text-absolute-white text-start body-1 font-normal  
              ${labelClasses || ""}`}
            htmlFor={id || `input-wrapto-${label}`}
          >
            {label}
          </label>
        )}
        <div className={` ${leading ? "flex items-center" : ""}`}>
          {leading && (
            <div
              className={cn("max-w-fit w-fit !rounded-r-none text-gray-600", {
                "!rounded-b-none": fieldOnTop,
                " ring-[1.5px] focus:ring-[1.5px]  ring-primary-500  text-gray-950":
                  isFocused,
                " ring-additional-error focus-visible:ring-additional-error   focus:ring-additional-error":
                  !disabled && status === "error",
                " !ring-additional-success hover:!ring-additional-success focus-visible:ring-additional-success   focus:ring-additional-success ":
                  !disabled && status === "success",
                "ring-gray-300 focus-visible:ring-gray-300  focus:ring-gray-300":
                  !disabled && status === "contained",
              })}
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
              }
            )}
          >
            {leftIcon && !leading && (
              <span
                className={`flex items-center ${
                  isFocused && !disabled
                    ? "text-gray-700"
                    : !disabled
                    ? "text-gray-500"
                    : "text-gray-300"
                }
               `}
              >
                {leftIcon}
              </span>
            )}

            <input
              onBlur={(e) => {
                setIsFocused(false);
                onBlur && onBlur(e);
              }}
              onFocus={(e) => {
                setIsFocused(true);
                onFocus && onFocus(e);
              }}
              disabled={disabled}
              id={id || `input-wrapto-${label}`}
              className={`py-sp6  disabled:text-gray-300 text-absolute-white autofill:text-absolute-white appearance-none ring-0 outline-none ring-none bg-background  w-full focus:placeholder:text-gray-400
                ${inputClasses || ""}`}
              type={type}
              ref={ref}
              value={localValue}
              onChange={(e) => {
                setLocalValue(e.target.value);
                customOnchange(e);
              }}
              {...props}
            />

            <div className="flex gap-sp2">
              {closeIcon && localValue && !disabled && (
                <span
                  className={` flex items-center justify-end  [&>svg]:size-sp7 text-absolute-white`}
                >
                  <>
                    <IconButton
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

        {helperText && type !== "search" && (
          <div className={helperTextClasses}>
            {!password && type !== "password" && (
              <span>
                <InfoCircle className="size-sp7" />
              </span>
            )}
            {helperText}
          </div>
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";
export { TextField, TextFieldVariants };
