import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDashboardLayout1Filled(props: ISvgProps) {
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
            d="M3 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4ZM17 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1V4ZM3 18a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V18ZM17 18a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1V18Z"
          />
        </svg>
      }
    </span>
  );
}
SvgDashboardLayout1Filled.propTypes = propTypes;
SvgDashboardLayout1Filled.defaultProps = defaultProps;
export default SvgDashboardLayout1Filled;
