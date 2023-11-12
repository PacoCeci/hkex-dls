import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgToolboxOutlined(props: ISvgProps) {
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
            d="M27 9.198h-5.083a6.002 6.002 0 0 0-11.834 0H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3Zm-11-3a4.002 4.002 0 0 1 3.874 3h-7.748c.444-1.725 2.01-3 3.874-3Zm-11 5a1 1 0 0 0-1 1v4h9a3 3 0 0 1 6 0h9v-4a1 1 0 0 0-1-1H5Zm23 7h-9a3 3 0 1 1-6 0H4v7a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-7Zm-13-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgToolboxOutlined.propTypes = propTypes;
SvgToolboxOutlined.defaultProps = defaultProps;
export default SvgToolboxOutlined;
