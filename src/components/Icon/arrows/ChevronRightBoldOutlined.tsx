import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChevronRightBoldOutlined(props: ISvgProps) {
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
            d="M11.299 7.492a1 1 0 0 0 0 1.414l7.293 7.293-7.293 7.293a1 1 0 1 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414l-8-8a1 1 0 0 0-1.414 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.067 7.138a1.5 1.5 0 1 0-2.122 2.122l6.94 6.939-6.94 6.94a1.5 1.5 0 1 0 2.121 2.12l8-8a1.5 1.5 0 0 0 0-2.12l-8-8Zm-1.415.707a.5.5 0 0 1 .707 0l8 8a.5.5 0 0 1 0 .707l-8 8a.5.5 0 0 1-.707-.707l7.293-7.292a.5.5 0 0 0 0-.708l-7.293-7.293a.5.5 0 0 1 0-.707Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChevronRightBoldOutlined.propTypes = propTypes;
SvgChevronRightBoldOutlined.defaultProps = defaultProps;
export default SvgChevronRightBoldOutlined;
