import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCropOutlined(props: ISvgProps) {
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
            d="M11 4.198a1 1 0 1 0-2 0v5H4a1 1 0 0 0 0 2h5v10a2 2 0 0 0 2 2h10v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2H11v-17Z"
          />
          <path
            fill="currentColor"
            d="M21 11.198v8h2v-8a2 2 0 0 0-2-2h-8v2h8Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCropOutlined.propTypes = propTypes;
SvgCropOutlined.defaultProps = defaultProps;
export default SvgCropOutlined;
