import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCompassOutlined(props: ISvgProps) {
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
            d="M16 28.198c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12Zm0 2c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M22.707 9.491a1 1 0 0 1 .242 1.023l-3 9a1 1 0 0 1-.633.633l-9 3a1 1 0 0 1-1.265-1.265l3-9a1 1 0 0 1 .633-.633l9-3a1 1 0 0 1 1.023.242Zm-8.916 4.498-2.21 6.628 6.628-2.21 2.21-6.628-6.628 2.21Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.5 16.198a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCompassOutlined.propTypes = propTypes;
SvgCompassOutlined.defaultProps = defaultProps;
export default SvgCompassOutlined;
