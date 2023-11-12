import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalculatorFilled(props: ISvgProps) {
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
            d="M13 10.198a1 1 0 0 1-1 1h-1v1a1 1 0 1 1-2 0v-1H8a1 1 0 1 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 0 1 1 1ZM25 20.698a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1ZM25 23.698a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6 3.198a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-20a3 3 0 0 0-3-3H6Zm9 2H6a1 1 0 0 0-1 1v9h10v-10Zm2 22v-10h10v9a1 1 0 0 1-1 1h-9Zm8-17a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1ZM12.707 20.905a1 1 0 0 0-1.414-1.414L10 20.784 8.707 19.49a1 1 0 0 0-1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 0 0 1.414 1.414L10 23.612l1.293 1.293a1 1 0 0 0 1.414-1.414l-1.293-1.293 1.293-1.293Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalculatorFilled.propTypes = propTypes;
SvgCalculatorFilled.defaultProps = defaultProps;
export default SvgCalculatorFilled;
