import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgEndLeftOutlined(props: ISvgProps) {
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
            d="M22.707 24.905a1 1 0 0 0 0-1.414l-7.293-7.293 7.293-7.293a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11 24.198a1 1 0 1 1-2 0v-16a1 1 0 1 1 2 0v16Z"
          />
        </svg>
      }
    </span>
  );
}
SvgEndLeftOutlined.propTypes = propTypes;
SvgEndLeftOutlined.defaultProps = defaultProps;
export default SvgEndLeftOutlined;
