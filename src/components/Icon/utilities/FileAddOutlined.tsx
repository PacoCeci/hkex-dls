import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFileAddOutlined(props: ISvgProps) {
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
            d="M7 5.198a1 1 0 0 1 1-1h10v6a1 1 0 0 0 1 1h6v7a1 1 0 1 0 2 0v-7.671a3 3 0 0 0-.879-2.122l-5.328-5.328a3 3 0 0 0-2.121-.879H8a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h7a1 1 0 1 0 0-2H8a1 1 0 0 1-1-1v-22Zm17.086 4L20 5.112v4.086h4.086Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M22 20.198a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgFileAddOutlined.propTypes = propTypes;
SvgFileAddOutlined.defaultProps = defaultProps;
export default SvgFileAddOutlined;
