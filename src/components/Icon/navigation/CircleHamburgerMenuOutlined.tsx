import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleHamburgerMenuOutlined(props: ISvgProps) {
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
            d="M16 28c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12S4 9.372 4 16c0 6.627 5.373 12 12 12Zm0 2c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1ZM9 16a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1ZM9 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleHamburgerMenuOutlined.propTypes = propTypes;
SvgCircleHamburgerMenuOutlined.defaultProps = defaultProps;
export default SvgCircleHamburgerMenuOutlined;
