import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgStopwatchOutlined(props: ISvgProps) {
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
            d="m12.707 13.491 4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 1.414-1.414Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13 2.198a1 1 0 1 0 0 2h2V6.24C8.84 6.747 4 11.908 4 18.2c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.955-1.067-5.659-2.837-7.75L26 9.612l.293.293a1 1 0 1 0 1.414-1.414l-2-2a1 1 0 1 0-1.414 1.414l.293.293-.837.837A11.947 11.947 0 0 0 17 6.24V4.2h2a1 1 0 1 0 0-2h-6Zm13 16c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgStopwatchOutlined.propTypes = propTypes;
SvgStopwatchOutlined.defaultProps = defaultProps;
export default SvgStopwatchOutlined;
