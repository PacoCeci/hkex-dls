import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgListCheckOutlined(props: ISvgProps) {
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
            d="M10.707 4.491a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6 7.784 9.293 4.49a1 1 0 0 1 1.414 0ZM10.707 22.491a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L6 25.784l3.293-3.293a1 1 0 0 1 1.414 0ZM10.707 13.491a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L6 16.784l3.293-3.293a1 1 0 0 1 1.414 0ZM13 7.198a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1ZM13 16.198a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1ZM13 25.198a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgListCheckOutlined.propTypes = propTypes;
SvgListCheckOutlined.defaultProps = defaultProps;
export default SvgListCheckOutlined;
