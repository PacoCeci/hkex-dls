import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSquareAddFilled(props: ISvgProps) {
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
            d="M7 3.198a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4v-18a4 4 0 0 0-4-4H7Zm10 7a1 1 0 0 0-2 0v5h-5a1 1 0 0 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5v-5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSquareAddFilled.propTypes = propTypes;
SvgSquareAddFilled.defaultProps = defaultProps;
export default SvgSquareAddFilled;
