import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHamburgerMenuOutlined(props: ISvgProps) {
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
            d="M4 9.198a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 16.198a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 23.198a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHamburgerMenuOutlined.propTypes = propTypes;
SvgHamburgerMenuOutlined.defaultProps = defaultProps;
export default SvgHamburgerMenuOutlined;
