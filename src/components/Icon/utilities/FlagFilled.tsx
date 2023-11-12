import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFlagFilled(props: ISvgProps) {
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
            d="M7 2.018a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0v-26a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6 3.018a1 1 0 0 1 1-1h18a1 1 0 0 1 .76 1.65l-5.443 6.35 5.442 6.35a1 1 0 0 1-.759 1.65H7a1 1 0 0 1-1-1v-14Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgFlagFilled.propTypes = propTypes;
SvgFlagFilled.defaultProps = defaultProps;
export default SvgFlagFilled;
