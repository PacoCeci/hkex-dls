import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSaveFilled(props: ISvgProps) {
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
            d="M26 3.198a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V11.027a3 3 0 0 1 .879-2.122l4.828-4.828a3 3 0 0 1 2.121-.879H26Zm-17 16a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8H9v-8Zm4-8a1 1 0 0 1-1-1v-5h11v5a1 1 0 0 1-1 1h-9Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21 6.198a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM11 21.198a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM11 24.198a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSaveFilled.propTypes = propTypes;
SvgSaveFilled.defaultProps = defaultProps;
export default SvgSaveFilled;
