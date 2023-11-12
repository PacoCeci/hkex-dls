import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPowerOutlined(props: ISvgProps) {
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
            d="M11.89 7.942a1 1 0 0 1-.435 1.346A10 10 0 0 0 6 18.198c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-5.455-8.91 1 1 0 0 1 .91-1.78A12 12 0 0 1 28 18.197c0 6.628-5.373 12-12 12s-12-5.372-12-12a12 12 0 0 1 6.545-10.69 1 1 0 0 1 1.345.434Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 2.198a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0v-12a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPowerOutlined.propTypes = propTypes;
SvgPowerOutlined.defaultProps = defaultProps;
export default SvgPowerOutlined;
