import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserSingleFilled(props: ISvgProps) {
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
            d="M8.46 9.698a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0ZM7.72 21.868a13.98 13.98 0 0 1 21.552 7.025 1 1 0 0 1-.952 1.305H3.6a1 1 0 0 1-.953-1.305 13.98 13.98 0 0 1 5.074-7.026Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserSingleFilled.propTypes = propTypes;
SvgUserSingleFilled.defaultProps = defaultProps;
export default SvgUserSingleFilled;
