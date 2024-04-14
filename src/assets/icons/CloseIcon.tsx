import { IconProps } from "types/iconProps";

export function CloseIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 18.5L18 6.5M6 6.5L18 18.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
