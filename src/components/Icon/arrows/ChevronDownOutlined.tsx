import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChevronDownOutlined(props: ISvgProps) {
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
        </svg>
      }
    </span>
  );
}
SvgChevronDownOutlined.propTypes = propTypes;
SvgChevronDownOutlined.defaultProps = defaultProps;
export default SvgChevronDownOutlined;
