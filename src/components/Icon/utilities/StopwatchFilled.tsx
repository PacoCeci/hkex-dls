import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgStopwatchFilled(props: ISvgProps) {
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
            d="M24 18.198a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-10.293-3.707 3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 1.414-1.414Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 3.198a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2V6.24a11.947 11.947 0 0 1 6.749 2.796l.837-.837-.293-.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-1.414 1.414L26 9.612l-.837.837A11.952 11.952 0 0 1 28 18.2c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.292 4.84-11.452 11-11.96V4.2h-2a1 1 0 0 1-1-1Zm14 15c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgStopwatchFilled.propTypes = propTypes;
SvgStopwatchFilled.defaultProps = defaultProps;
export default SvgStopwatchFilled;
