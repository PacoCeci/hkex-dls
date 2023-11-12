import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgStopFilled(props: ISvgProps) {
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
            d="M7 3.198a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4v-18a4 4 0 0 0-4-4H7Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgStopFilled.propTypes = propTypes;
SvgStopFilled.defaultProps = defaultProps;
export default SvgStopFilled;
