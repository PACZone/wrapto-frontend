import { IconProps } from "types/iconProps";

const FillInfoCircleIcon = ({ ...props }: IconProps) => {
    return (
        <svg
            {...props}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 20C3.75 11.0254 11.0254 3.75 20 3.75C28.9746 3.75 36.25 11.0254 36.25 20C36.25 28.9746 28.9746 36.25 20 36.25C11.0254 36.25 3.75 28.9746 3.75 20ZM20 13.75C20.6904 13.75 21.25 14.3096 21.25 15V21.25C21.25 21.9404 20.6904 22.5 20 22.5C19.3096 22.5 18.75 21.9404 18.75 21.25V15C18.75 14.3096 19.3096 13.75 20 13.75ZM20 27.5C20.6904 27.5 21.25 26.9404 21.25 26.25C21.25 25.5596 20.6904 25 20 25C19.3096 25 18.75 25.5596 18.75 26.25C18.75 26.9404 19.3096 27.5 20 27.5Z"
                fill="currentColor"
            />
        </svg>
    );
};

export { FillInfoCircleIcon };
