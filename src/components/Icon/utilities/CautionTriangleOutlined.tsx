import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCautionTriangleOutlined(props: ISvgProps) {
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
            d="M16 6.304 4.905 26.198h22.19L16 6.304Zm-1.747-.974L3.16 25.224c-.744 1.333.22 2.974 1.746 2.974h22.19c1.526 0 2.49-1.641 1.746-2.974L17.747 5.33c-.763-1.368-2.731-1.368-3.494 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.5 22.698a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 19.198a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCautionTriangleOutlined.propTypes = propTypes;
SvgCautionTriangleOutlined.defaultProps = defaultProps;
export default SvgCautionTriangleOutlined;
