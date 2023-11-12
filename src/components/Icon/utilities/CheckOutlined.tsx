import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCheckOutlined(props: ISvgProps) {
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
            d="M28.707 7.491a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414 0l-8-8a1 1 0 1 1 1.414-1.414L12 22.784 27.293 7.49a1 1 0 0 1 1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCheckOutlined.propTypes = propTypes;
SvgCheckOutlined.defaultProps = defaultProps;
export default SvgCheckOutlined;
