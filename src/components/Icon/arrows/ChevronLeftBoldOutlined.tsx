import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChevronLeftBoldOutlined(props: ISvgProps) {
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
            d="M20.713 24.906a1 1 0 0 0 0-1.414l-7.293-7.293 7.293-7.293a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18.945 25.26a1.5 1.5 0 1 0 2.122-2.122l-6.94-6.94 6.94-6.938a1.5 1.5 0 1 0-2.122-2.122l-8 8a1.5 1.5 0 0 0 0 2.122l8 8Zm1.414-.708a.5.5 0 0 1-.707 0l-8-8a.5.5 0 0 1 0-.707l8-8a.5.5 0 1 1 .707.707l-7.293 7.293a.5.5 0 0 0 0 .707l7.293 7.293a.5.5 0 0 1 0 .707Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChevronLeftBoldOutlined.propTypes = propTypes;
SvgChevronLeftBoldOutlined.defaultProps = defaultProps;
export default SvgChevronLeftBoldOutlined;
