import { IconProps } from "types/iconProps";

export function CheckIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.6893 33.575L1.16484 25.6192C0.384595 24.9674 0.275341 23.8004 0.920838 23.0126L3.054 20.4092C3.69949 19.6214 4.8553 19.5111 5.63555 20.1628L10.85 24.5185L27.4335 0.784255C28.0173 -0.0512164 29.1613 -0.250695 29.9888 0.338723L32.7233 2.28654C33.5507 2.87595 33.7483 4.03105 33.1645 4.86652L13.3564 33.2158C12.7407 34.097 11.5123 34.2624 10.6893 33.575Z"
                fill="currentColor"
            />
        </svg>
    );
}
