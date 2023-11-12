import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleCheckFilled(props: ISvgProps) {
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
            d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm6.707-17.293a1 1 0 0 0-1.414-1.414L14 18.586l-3.293-3.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleCheckFilled.propTypes = propTypes;
SvgCircleCheckFilled.defaultProps = defaultProps;
export default SvgCircleCheckFilled;
