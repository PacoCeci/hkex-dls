import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChevronDownBoldOutlined(props: ISvgProps) {
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
            d="M24.714 11.492a1 1 0 0 0-1.415 0l-7.292 7.293-7.293-7.293a1 1 0 0 0-1.415 1.414l8 8a1 1 0 0 0 1.415 0l8-8a1 1 0 0 0 0-1.414Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M25.067 13.26a1.5 1.5 0 0 0-2.121-2.122l-6.94 6.94-6.939-6.94a1.5 1.5 0 1 0-2.121 2.121l8 8a1.5 1.5 0 0 0 2.121 0l8-8Zm-.707-1.415a.5.5 0 0 1 0 .707l-8 8a.5.5 0 0 1-.707 0l-8-8a.5.5 0 0 1 .707-.707l7.293 7.293a.5.5 0 0 0 .707 0l7.293-7.293a.5.5 0 0 1 .707 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChevronDownBoldOutlined.propTypes = propTypes;
SvgChevronDownBoldOutlined.defaultProps = defaultProps;
export default SvgChevronDownBoldOutlined;
