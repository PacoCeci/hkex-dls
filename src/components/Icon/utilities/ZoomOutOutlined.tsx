import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgZoomOutOutlined(props: ISvgProps) {
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
            d="M19 16.198a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2h8Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15 27.198c2.954 0 5.658-1.067 7.749-2.837l4.544 4.544a1 1 0 0 0 1.414-1.414l-4.544-4.544A11.952 11.952 0 0 0 27 15.198c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12Zm0-2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgZoomOutOutlined.propTypes = propTypes;
SvgZoomOutOutlined.defaultProps = defaultProps;
export default SvgZoomOutOutlined;
