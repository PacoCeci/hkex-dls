import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCloseOutlined(props: ISvgProps) {
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
            d="M25.707 7.905a1 1 0 0 0-1.414-1.414L16 14.784 7.707 6.49a1 1 0 0 0-1.414 1.414l8.293 8.293-8.293 8.293a1 1 0 1 0 1.414 1.414L16 17.612l8.293 8.293a1 1 0 0 0 1.414-1.414l-8.293-8.293 8.293-8.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCloseOutlined.propTypes = propTypes;
SvgCloseOutlined.defaultProps = defaultProps;
export default SvgCloseOutlined;
