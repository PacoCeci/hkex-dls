import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMouseOutlined(props: ISvgProps) {
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
            d="M16 4.198a8 8 0 0 0-8 8v8a8 8 0 1 0 16 0v-8a8 8 0 0 0-8-8Zm-10 8c0-5.523 4.477-10 10-10s10 4.477 10 10v8c0 5.523-4.477 10-10 10s-10-4.477-10-10v-8Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 8.198a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgMouseOutlined.propTypes = propTypes;
SvgMouseOutlined.defaultProps = defaultProps;
export default SvgMouseOutlined;
