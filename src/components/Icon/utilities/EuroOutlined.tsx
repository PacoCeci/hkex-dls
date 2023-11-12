import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgEuroOutlined(props: ISvgProps) {
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
            d="M22.026 5.198a8.78 8.78 0 0 1 2.906.485 1 1 0 1 0 .656-1.89 10.78 10.78 0 0 0-3.634-.594 12.54 12.54 0 0 0-11.955 13 12.54 12.54 0 0 0 11.998 13 11 11 0 0 0 4.4-.903 1 1 0 0 0-.794-1.836 9 9 0 0 1-3.579.738A10.54 10.54 0 0 1 12 16.24a1.014 1.014 0 0 0 0-.082A10.54 10.54 0 0 1 22.026 5.198Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 13.198a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM5 19.198a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgEuroOutlined.propTypes = propTypes;
SvgEuroOutlined.defaultProps = defaultProps;
export default SvgEuroOutlined;
