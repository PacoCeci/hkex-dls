import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFishballMenuVerticalOutlined(props: ISvgProps) {
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
            d="M16 14.198a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM16 5.198a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM16 23.198a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
          />
        </svg>
      }
    </span>
  );
}
SvgFishballMenuVerticalOutlined.propTypes = propTypes;
SvgFishballMenuVerticalOutlined.defaultProps = defaultProps;
export default SvgFishballMenuVerticalOutlined;
