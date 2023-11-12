import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgClockFilled(props: ISvgProps) {
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
            d="M16 30.198c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Zm1-21a1 1 0 1 0-2 0v7a1 1 0 0 0 .293.707l5 5a1 1 0 1 0 1.414-1.414L17 15.784V9.198Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgClockFilled.propTypes = propTypes;
SvgClockFilled.defaultProps = defaultProps;
export default SvgClockFilled;
