import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgContentOrder2Outlined(props: ISvgProps) {
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
            d="M4 9.198a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM8 16.198a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM12 23.198a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgContentOrder2Outlined.propTypes = propTypes;
SvgContentOrder2Outlined.defaultProps = defaultProps;
export default SvgContentOrder2Outlined;
