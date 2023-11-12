import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCompassFilled(props: ISvgProps) {
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
            d="M16 17.698a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M30 16.198c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14Zm-7.051-5.684a1 1 0 0 0-1.265-1.265l-9 3a1 1 0 0 0-.633.633l-3 9a1 1 0 0 0 1.265 1.265l9-3a1 1 0 0 0 .633-.633l3-9Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCompassFilled.propTypes = propTypes;
SvgCompassFilled.defaultProps = defaultProps;
export default SvgCompassFilled;
