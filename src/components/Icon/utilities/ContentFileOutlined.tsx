import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgContentFileOutlined(props: ISvgProps) {
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
            d="M8 2.198a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V10.527a3 3 0 0 0-.879-2.122l-5.328-5.328a3 3 0 0 0-2.121-.879H8Zm-1 3a1 1 0 0 1 1-1h10v6a1 1 0 0 0 1 1h6v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-22Zm17.086 4L20 5.112v4.086h4.086Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgContentFileOutlined.propTypes = propTypes;
SvgContentFileOutlined.defaultProps = defaultProps;
export default SvgContentFileOutlined;
