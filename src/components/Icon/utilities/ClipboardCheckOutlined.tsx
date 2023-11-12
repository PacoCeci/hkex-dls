import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgClipboardCheckOutlined(props: ISvgProps) {
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
            d="M21.207 14.491a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l2.293 2.293 5.293-5.293a1 1 0 0 1 1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgClipboardCheckOutlined.propTypes = propTypes;
SvgClipboardCheckOutlined.defaultProps = defaultProps;
export default SvgClipboardCheckOutlined;
