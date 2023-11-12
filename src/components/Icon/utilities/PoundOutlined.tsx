import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPoundOutlined(props: ISvgProps) {
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
            d="M13.203 4.4a7.52 7.52 0 0 1 5.294-2.202l.003 1 .003-1A7.52 7.52 0 0 1 26 9.695v1.503a1 1 0 1 1-2 0V9.7a5.52 5.52 0 0 0-5.5-5.502A5.52 5.52 0 0 0 13 9.7v12.498a1 1 0 0 1-.168.555L9.87 27.198H25a1 1 0 1 1 0 2H8a1 1 0 0 1-.832-1.555L11 21.895v-12.2a7.52 7.52 0 0 1 2.203-5.294Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 16.198a1 1 0 0 1 1-1h11.98a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPoundOutlined.propTypes = propTypes;
SvgPoundOutlined.defaultProps = defaultProps;
export default SvgPoundOutlined;
