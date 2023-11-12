import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgShieldFilled(props: ISvgProps) {
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
            d="M4.459 5.355C4.99 4.977 9.124 2.198 16 2.198s11.01 2.779 11.541 3.157c.315.225.459.571.459.893v6.95c0 6.648-2.755 10.869-5.619 13.432-2.833 2.536-5.738 3.424-6.082 3.523a1.075 1.075 0 0 1-.598 0c-.344-.1-3.249-.987-6.082-3.523C6.755 24.067 4 19.846 4 13.198v-6.95c0-.322.144-.668.459-.893Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgShieldFilled.propTypes = propTypes;
SvgShieldFilled.defaultProps = defaultProps;
export default SvgShieldFilled;
