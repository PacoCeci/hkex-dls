import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalculatorOutlined(props: ISvgProps) {
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
            d="M12 11.198a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1ZM25 10.198a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1ZM12.707 20.905a1 1 0 0 0-1.414-1.414L10 20.784 8.707 19.49a1 1 0 0 0-1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414L10 23.612l1.293 1.293a1 1 0 1 0 1.414-1.414l-1.293-1.293 1.293-1.293ZM24 21.698a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2h4ZM25 23.698a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 6.198a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-20Zm3-1h9v10H5v-9a1 1 0 0 1 1-1Zm21 10H17v-10h9a1 1 0 0 1 1 1v9Zm-22 11v-9h10v10H6a1 1 0 0 1-1-1Zm12-9v10h9a1 1 0 0 0 1-1v-9H17Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalculatorOutlined.propTypes = propTypes;
SvgCalculatorOutlined.defaultProps = defaultProps;
export default SvgCalculatorOutlined;
