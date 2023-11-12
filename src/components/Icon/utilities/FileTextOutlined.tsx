import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFileTextOutlined(props: ISvgProps) {
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
            d="M8 2.198a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V10.526a3 3 0 0 0-.879-2.12l-5.328-5.33a3 3 0 0 0-2.121-.878H8Zm-1 3a1 1 0 0 1 1-1h10v6a1 1 0 0 0 1 1h6v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-22Zm17.086 4L20 5.112v4.086h4.086Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M10 26.198a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H10ZM9 21.198a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgFileTextOutlined.propTypes = propTypes;
SvgFileTextOutlined.defaultProps = defaultProps;
export default SvgFileTextOutlined;
