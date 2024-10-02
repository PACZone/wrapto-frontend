import { IconProps } from 'types/iconProps';

export  function ChevronDown({ className }: IconProps) {
    return (
        <svg
        className={className}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 8.25L12.5 15.75L5 8.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
