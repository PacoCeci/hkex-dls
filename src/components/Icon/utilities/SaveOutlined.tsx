import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSaveOutlined(props: ISvgProps) {
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
            d="M22 7.198a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2ZM11 21.198a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM12 23.198a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M26 3.198a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V11.027a3 3 0 0 1 .879-2.122l4.828-4.828a3 3 0 0 1 2.121-.879H26Zm1 3a1 1 0 0 0-1-1h-1v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V5.612L5.293 10.32a1 1 0 0 0-.293.707v15.172a1 1 0 0 0 1 1h1v-8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8h1a1 1 0 0 0 1-1v-20Zm-15-1h11v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5Zm-3 22h14v-8a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v8Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSaveOutlined.propTypes = propTypes;
SvgSaveOutlined.defaultProps = defaultProps;
export default SvgSaveOutlined;
