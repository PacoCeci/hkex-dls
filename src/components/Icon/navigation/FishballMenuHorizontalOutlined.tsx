import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFishballMenuHorizontalOutlined(props: ISvgProps) {
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
            d="M18 16.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM27 16.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 16.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgFishballMenuHorizontalOutlined.propTypes = propTypes;
SvgFishballMenuHorizontalOutlined.defaultProps = defaultProps;
export default SvgFishballMenuHorizontalOutlined;
