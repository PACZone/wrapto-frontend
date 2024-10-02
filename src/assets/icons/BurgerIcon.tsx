import { IconProps } from "types/iconProps";

export function BurgerIcon({className}:IconProps) {
  return (
      <svg
          className={className}
          width="28"
          height="18"
          viewBox="0 0 28 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          <line
              y1="0.875"
              x2="28"
              y2="0.875"
              stroke="white"
              strokeWidth="1.5"
          />
          <line
              y1="8.875"
              x2="28"
              y2="8.875"
              stroke="white"
              strokeWidth="1.5"
          />
          <line
              y1="16.875"
              x2="28"
              y2="16.875"
              stroke="white"
              strokeWidth="1.5"
          />
      </svg>
  );
}
