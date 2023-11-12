import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgArrowDownOutlined(props: ISvgProps) {
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
            d="M8.707 19.491a1 1 0 0 0-1.414 1.414l8 8a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0-1.414-1.414L17 25.784V4.198a1 1 0 1 0-2 0v21.586L8.707 19.49Z"
          />
        </svg>
      }
    </span>
  );
}
SvgArrowDownOutlined.propTypes = propTypes;
SvgArrowDownOutlined.defaultProps = defaultProps;
export default SvgArrowDownOutlined;
