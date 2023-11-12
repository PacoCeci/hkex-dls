import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCopyOutlined(props: ISvgProps) {
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
            d="M19 4.198H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1Zm0-2a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-16a3 3 0 0 1 3-3h12ZM24 8.198h1a3 3 0 0 1 3 3v1h-2v-1a1 1 0 0 0-1-1h-1v-2Zm2 10v-4h2v4h-2Zm2 2v4h-2v-4h2Zm-16 6v1a1 1 0 0 0 1 1h1v2h-1a3 3 0 0 1-3-3v-1h2Zm16 0v1a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-1h2Zm-6 4h-6v-2h6v2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCopyOutlined.propTypes = propTypes;
SvgCopyOutlined.defaultProps = defaultProps;
export default SvgCopyOutlined;
