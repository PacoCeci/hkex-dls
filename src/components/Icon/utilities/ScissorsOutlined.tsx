import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgScissorsOutlined(props: ISvgProps) {
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
            d="M3 8.198a5 5 0 1 1 6.99 4.589l3.967 2.26 13.548-7.718a1 1 0 0 1 .99 1.738l-12.517 7.13 12.517 7.132a1 1 0 1 1-.99 1.738l-13.547-7.718-3.969 2.26A5.001 5.001 0 0 1 8 29.2a5 5 0 0 1-2.494-9.336h-.001l6.432-3.665-6.432-3.665A4.998 4.998 0 0 1 3 8.198Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-3 19a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgScissorsOutlined.propTypes = propTypes;
SvgScissorsOutlined.defaultProps = defaultProps;
export default SvgScissorsOutlined;
