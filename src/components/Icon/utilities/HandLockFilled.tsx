import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHandLockFilled(props: ISvgProps) {
  const { size, color } = props;
  return (
    <span className="hecl-icon">
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          viewBox="0 0 32 33"
          {...props}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 10.198a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-7Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M23 4.198a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 10 0v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3ZM2 19.198a1 1 0 0 1 1-1h6a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4H3a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7 24.198a1 1 0 0 1 1-1h10a5 5 0 0 1 5 5 2 2 0 0 1-2 2H3a1 1 0 1 1 0-2h18a3 3 0 0 0-3-3H8a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHandLockFilled.propTypes = propTypes;
SvgHandLockFilled.defaultProps = defaultProps;
export default SvgHandLockFilled;
