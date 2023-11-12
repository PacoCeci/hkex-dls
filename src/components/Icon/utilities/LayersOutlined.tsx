import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLayersOutlined(props: ISvgProps) {
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
            d="M15.553 3.105a1 1 0 0 1 .894 0l12 6a1 1 0 0 1 0 1.79l-12 6a1 1 0 0 1-.894 0l-12-6a1 1 0 0 1 0-1.79l12-6ZM6.236 10 16 14.882 25.764 10 16 5.118 6.236 10Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.106 15.553a1 1 0 0 1 1.341-.448L16 20.883l11.553-5.777a1 1 0 1 1 .894 1.79l-12 6a1 1 0 0 1-.894 0l-12-6a1 1 0 0 1-.447-1.342Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.106 21.553a1 1 0 0 1 1.341-.448L16 26.882l11.553-5.777a1 1 0 0 1 .894 1.79l-12 6a1 1 0 0 1-.894 0l-12-6a1 1 0 0 1-.447-1.342Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgLayersOutlined.propTypes = propTypes;
SvgLayersOutlined.defaultProps = defaultProps;
export default SvgLayersOutlined;
