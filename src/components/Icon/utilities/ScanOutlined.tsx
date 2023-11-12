import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgScanOutlined(props: ISvgProps) {
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
            d="M6 20.198a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H8a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1ZM26 12.198a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 1 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1ZM12 6.198a1 1 0 0 1-1 1H8a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0v-3a3 3 0 0 1 3-3h3a1 1 0 0 1 1 1ZM20 26.198a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3h-3a1 1 0 0 1-1-1ZM2 16.198a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgScanOutlined.propTypes = propTypes;
SvgScanOutlined.defaultProps = defaultProps;
export default SvgScanOutlined;
