import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarOutlined(props: ISvgProps) {
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
            d="M11 17.698a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 19.198a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM24 17.698a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9.5 24.198a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 22.698a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM22.5 24.198a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
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
SvgCalendarOutlined.propTypes = propTypes;
SvgCalendarOutlined.defaultProps = defaultProps;
export default SvgCalendarOutlined;
