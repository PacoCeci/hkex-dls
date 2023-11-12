import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgClipboardCancelOutlined(props: ISvgProps) {
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
            d="M16 8.698a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.207 13.991a1 1 0 0 1 0 1.414l-2.793 2.793 2.793 2.793a1 1 0 0 1-1.414 1.414L16 19.612l-2.793 2.793a1 1 0 1 1-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 0 1 1.414-1.414L16 16.784l2.793-2.793a1 1 0 0 1 1.414 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 2.198a5.002 5.002 0 0 0-4.9 4H8a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-18a3 3 0 0 0-3-3h-3.1a5.002 5.002 0 0 0-4.9-4Zm-3 5a3 3 0 1 1 6 0 1 1 0 0 0 1 1h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1h4a1 1 0 0 0 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgClipboardCancelOutlined.propTypes = propTypes;
SvgClipboardCancelOutlined.defaultProps = defaultProps;
export default SvgClipboardCancelOutlined;
