import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMoveUpOutlined(props: ISvgProps) {
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
            d="M4 5.198a1 1 0 1 1 0-2h24a1 1 0 1 1 0 2H4ZM22.707 15.905a1 1 0 0 1-1.414 0L17 11.612v16.586a1 1 0 1 1-2 0V11.612l-4.293 4.293a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMoveUpOutlined.propTypes = propTypes;
SvgMoveUpOutlined.defaultProps = defaultProps;
export default SvgMoveUpOutlined;
