import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChatGroupFilled(props: ISvgProps) {
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
            d="M7.333 3.198A4.333 4.333 0 0 0 3 7.531v10a4.334 4.334 0 0 0 4 4.321v2.346a1 1 0 0 0 1.64.768l4-3.333a1 1 0 0 0 .36-.768v-2.667a5 5 0 0 1 5-5h6a1 1 0 0 0 1-1V7.531a4.333 4.333 0 0 0-4.333-4.333H7.333Z"
          />
          <path
            fill="currentColor"
            d="M26 15.198a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3v1a1 1 0 0 1-1.625.781l-2.226-1.78H18a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h8Z"
          />
        </svg>
      }
    </span>
  );
}
SvgChatGroupFilled.propTypes = propTypes;
SvgChatGroupFilled.defaultProps = defaultProps;
export default SvgChatGroupFilled;
