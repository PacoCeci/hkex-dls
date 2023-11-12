import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDashboardLayout2Outlined(props: ISvgProps) {
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
            d="M3 4.198a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-12Zm2 11v-10h8v10H5ZM17 4.198a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-8Zm2 7v-6h8v6h-8ZM4 19.198a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H4Zm1 2v6h8v-6H5ZM17 16.198a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-12Zm2 11v-10h8v10h-8Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgDashboardLayout2Outlined.propTypes = propTypes;
SvgDashboardLayout2Outlined.defaultProps = defaultProps;
export default SvgDashboardLayout2Outlined;
