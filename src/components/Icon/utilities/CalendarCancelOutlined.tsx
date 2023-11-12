import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarCancelOutlined(props: ISvgProps) {
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
            d="M19.207 16.991a1 1 0 0 1 0 1.414l-1.793 1.793 1.793 1.793a1 1 0 1 1-1.414 1.414L16 21.612l-1.793 1.793a1 1 0 1 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 1.414-1.414L16 18.784l1.793-1.793a1 1 0 0 1 1.414 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11 3.198a1 1 0 0 1 1 1v1h8v-1a1 1 0 1 1 2 0v1h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-18a3 3 0 0 1 3-3h4v-1a1 1 0 0 1 1-1Zm9 4v1a1 1 0 1 0 2 0v-1h4a1 1 0 0 1 1 1v3H5v-3a1 1 0 0 1 1-1h4v1a1 1 0 1 0 2 0v-1h8Zm-15 6v13a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-13H5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalendarCancelOutlined.propTypes = propTypes;
SvgCalendarCancelOutlined.defaultProps = defaultProps;
export default SvgCalendarCancelOutlined;
