import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDashboardLayout2Filled(props: ISvgProps) {
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
            d="M4 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4ZM17 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1V4ZM3 20a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8ZM17 16a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1V16Z"
          />
        </svg>
      }
    </span>
  );
}
SvgDashboardLayout2Filled.propTypes = propTypes;
SvgDashboardLayout2Filled.defaultProps = defaultProps;
export default SvgDashboardLayout2Filled;
