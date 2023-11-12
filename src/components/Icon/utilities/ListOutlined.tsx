import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgListOutlined(props: ISvgProps) {
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
          <path fill="currentColor" d="M7 7.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 9.198a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M7 16.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 18.198a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M7 25.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 27.198a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11 7.198a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM11 16.198a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM11 25.198a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgListOutlined.propTypes = propTypes;
SvgListOutlined.defaultProps = defaultProps;
export default SvgListOutlined;
