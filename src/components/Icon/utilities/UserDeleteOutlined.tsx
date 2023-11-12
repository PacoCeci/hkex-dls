import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserDeleteOutlined(props: ISvgProps) {
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
            d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM15.964 17.049A8 8 0 0 0 4 23.999v2h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V24a10.001 10.001 0 0 1 14.956-8.689 1 1 0 1 1-.992 1.738ZM29.707 19.813a1 1 0 0 1 0 1.414l-8.48 8.48a1 1 0 0 1-1.414-1.414l8.48-8.48a1 1 0 0 1 1.414 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M19.813 19.813a1 1 0 0 1 1.414 0l8.48 8.48a1 1 0 0 1-1.414 1.414l-8.48-8.48a1 1 0 0 1 0-1.414Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserDeleteOutlined.propTypes = propTypes;
SvgUserDeleteOutlined.defaultProps = defaultProps;
export default SvgUserDeleteOutlined;
