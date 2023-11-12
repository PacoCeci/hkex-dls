import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHourglassOutlined(props: ISvgProps) {
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
            d="M16.707 20.491a1 1 0 0 0-1.414 0l-4 4A1 1 0 0 0 12 26.198h8a1 1 0 0 0 .707-1.707l-4-4ZM11.67 10.699a4.998 4.998 0 0 0 4.33 2.5 4.998 4.998 0 0 0 4.33-2.5 1 1 0 0 0-.865-1.5h-6.93a1 1 0 0 0-.865 1.5Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4 3.198a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-2v4a9 9 0 0 1-4.873 8 9 9 0 0 1 4.873 8v4h2a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h2v-4a9 9 0 0 1 4.873-8 9 9 0 0 1-4.873-8v-4H5a1 1 0 0 1-1-1Zm5 25h14v-4a7 7 0 1 0-14 0v4Zm7-13a7 7 0 0 0 7-7v-4H9v4a7 7 0 0 0 7 7Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHourglassOutlined.propTypes = propTypes;
SvgHourglassOutlined.defaultProps = defaultProps;
export default SvgHourglassOutlined;
