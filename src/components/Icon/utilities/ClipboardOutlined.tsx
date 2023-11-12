import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgClipboardOutlined(props: ISvgProps) {
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
            d="M11.1 6.198a5.002 5.002 0 0 1 9.8 0H24a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-18a3 3 0 0 1 3-3h3.1Zm4.9-2a3 3 0 0 0-3 3 1 1 0 0 1-1 1H8a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1 3 3 0 0 0-3-3Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.5 7.198a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9 14.198a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1ZM9 18.198a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1ZM9 22.198a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgClipboardOutlined.propTypes = propTypes;
SvgClipboardOutlined.defaultProps = defaultProps;
export default SvgClipboardOutlined;
