import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDashboardLayout1Outlined(props: ISvgProps) {
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
            d="M5 5.198v8h8v-8H5Zm-1-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1H4ZM19 5.198v8h8v-8h-8Zm-1-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1H18ZM5 19.198v8h8v-8H5Zm-1-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1H4ZM19 19.198v8h8v-8h-8Zm-1-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1H18Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgDashboardLayout1Outlined.propTypes = propTypes;
SvgDashboardLayout1Outlined.defaultProps = defaultProps;
export default SvgDashboardLayout1Outlined;
