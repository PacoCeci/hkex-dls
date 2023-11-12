import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChatOutlined(props: ISvgProps) {
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
            d="M3 8.198a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-9.65L9.626 28.98A1 1 0 0 1 8 28.199v-3a5 5 0 0 1-5-5v-12Zm5-3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1a1 1 0 0 1 1 1v1.92l3.375-2.7a1 1 0 0 1 .625-.22h10a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3H8Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChatOutlined.propTypes = propTypes;
SvgChatOutlined.defaultProps = defaultProps;
export default SvgChatOutlined;
