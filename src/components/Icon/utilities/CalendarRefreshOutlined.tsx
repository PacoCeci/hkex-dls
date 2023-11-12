import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarRefreshOutlined(props: ISvgProps) {
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
            d="M21 11.198a1 1 0 0 0-1 1v.52a6 6 0 1 0 1.51 6.881 1 1 0 0 0-1.833-.801 4.001 4.001 0 1 1-1.021-4.6H18a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11 3.198a1 1 0 0 1 1 1v1h8v-1a1 1 0 1 1 2 0v1h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-18a3 3 0 0 1 3-3h4v-1a1 1 0 0 1 1-1Zm9 4v1a1 1 0 1 0 2 0v-1h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1h4v1a1 1 0 1 0 2 0v-1h8Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalendarRefreshOutlined.propTypes = propTypes;
SvgCalendarRefreshOutlined.defaultProps = defaultProps;
export default SvgCalendarRefreshOutlined;
