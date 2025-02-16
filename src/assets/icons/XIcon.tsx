import { IconProps } from "types/iconProps";

const XIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={className}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.68555 26.5L26.313 3.87266"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
            />
            <path
                d="M3.68555 3.5L26.3129 26.1275"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
            />
        </svg>
    );
};

export { XIcon };
