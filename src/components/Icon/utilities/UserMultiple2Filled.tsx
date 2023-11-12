import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserMultiple2Filled(props: ISvgProps) {
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
            d="M23.41 4.257a2.676 2.676 0 1 0 0 5.353 2.676 2.676 0 0 0 0-5.353Zm-4.735 2.676a4.735 4.735 0 1 1 9.471 0 4.735 4.735 0 0 1-9.47 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17.647 14.86A6.588 6.588 0 0 1 30 18.051v1.853a1.03 1.03 0 0 1-2.059 0v-1.852a4.53 4.53 0 0 0-8.494-2.193 1.03 1.03 0 0 1-1.8-.999ZM8.587 4.257a2.676 2.676 0 1 0 0 5.353 2.676 2.676 0 0 0 0-5.353ZM3.852 6.933a4.735 4.735 0 1 1 9.47 0 4.735 4.735 0 0 1-9.47 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.588 13.522a4.53 4.53 0 0 0-4.53 4.53v1.852a1.03 1.03 0 0 1-2.058 0v-1.852a6.588 6.588 0 0 1 12.353-3.192 1.03 1.03 0 0 1-1.8.999 4.528 4.528 0 0 0-3.965-2.337Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.267 18.047a4.735 4.735 0 1 1 9.47 0 4.735 4.735 0 0 1-9.47 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9.413 29.164a6.588 6.588 0 1 1 13.176 0c0 .569-.46 1.03-1.029 1.03H10.442a1.03 1.03 0 0 1-1.03-1.03Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.267 18.047a4.735 4.735 0 1 1 9.47 0 4.735 4.735 0 0 1-9.47 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9.413 29.164a6.588 6.588 0 1 1 13.176 0c0 .569-.46 1.03-1.029 1.03H10.442a1.03 1.03 0 0 1-1.03-1.03Z"
          />
        </svg>
      }
    </span>
  );
}
SvgUserMultiple2Filled.propTypes = propTypes;
SvgUserMultiple2Filled.defaultProps = defaultProps;
export default SvgUserMultiple2Filled;
