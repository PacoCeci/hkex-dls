import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPlayFilled(props: ISvgProps) {
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
            d="M4.504 2.33a1 1 0 0 1 1.005.007l22 13a1 1 0 0 1 0 1.722l-22 13A1 1 0 0 1 4 29.199v-26a1 1 0 0 1 .504-.87Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPlayFilled.propTypes = propTypes;
SvgPlayFilled.defaultProps = defaultProps;
export default SvgPlayFilled;
