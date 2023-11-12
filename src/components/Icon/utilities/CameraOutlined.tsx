import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCameraOutlined(props: ISvgProps) {
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
            d="M12.293 5.491A1 1 0 0 1 13 5.198h6a1 1 0 0 1 .707.293l2.707 2.707H27a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h4.586l2.707-2.707Zm1.121 1.707-2.707 2.707a1 1 0 0 1-.707.293H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-5a1 1 0 0 1-.707-.293l-2.707-2.707h-5.172Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 17.198c0-3.31 2.69-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.69-6-6Zm6-4c-2.205 0-4 1.795-4 4s1.796 4 4 4c2.204 0 4-1.796 4-4 0-2.204-1.795-4-4-4Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCameraOutlined.propTypes = propTypes;
SvgCameraOutlined.defaultProps = defaultProps;
export default SvgCameraOutlined;
