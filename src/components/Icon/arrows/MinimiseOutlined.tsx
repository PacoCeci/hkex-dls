import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMinimiseOutlined(props: ISvgProps) {
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
            d="M20.414 13.198H26a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v5.586l8.293-8.293a1 1 0 0 1 1.414 1.414l-8.293 8.293ZM6 17.198h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-5.586l-8.293 8.293a1 1 0 1 1-1.414-1.414l8.293-8.293H6a1 1 0 1 1 0-2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgMinimiseOutlined.propTypes = propTypes;
SvgMinimiseOutlined.defaultProps = defaultProps;
export default SvgMinimiseOutlined;
