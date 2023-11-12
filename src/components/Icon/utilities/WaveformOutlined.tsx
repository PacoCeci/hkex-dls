import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgWaveformOutlined(props: ISvgProps) {
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
            d="M16 2.198a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0v-26a1 1 0 0 1 1-1ZM21 7.198a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-16a1 1 0 0 1 1-1ZM11 7.198a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-16a1 1 0 0 1 1-1ZM26 12.198a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM6 12.198a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgWaveformOutlined.propTypes = propTypes;
SvgWaveformOutlined.defaultProps = defaultProps;
export default SvgWaveformOutlined;
