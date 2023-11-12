import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMouseFilled(props: ISvgProps) {
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
            d="M16 2.198c-5.523 0-10 4.477-10 10v8c0 5.523 4.477 10 10 10s10-4.477 10-10v-8c0-5.523-4.477-10-10-10Zm1 7a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgMouseFilled.propTypes = propTypes;
SvgMouseFilled.defaultProps = defaultProps;
export default SvgMouseFilled;
