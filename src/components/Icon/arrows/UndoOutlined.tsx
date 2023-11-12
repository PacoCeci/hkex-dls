import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUndoOutlined(props: ISvgProps) {
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
            d="M5 4.198a1 1 0 0 0-2 0v7.5a1 1 0 0 0 1 1h7.5a1 1 0 1 0 0-2H6.471A10.996 10.996 0 0 1 16 5.198c6.075 0 11 4.925 11 11s-4.925 11-11 11a1 1 0 1 0 0 2c7.18 0 13-5.82 13-13s-5.82-13-13-13A12.99 12.99 0 0 0 5 9.267V4.198Z"
          />
        </svg>
      }
    </span>
  );
}
SvgUndoOutlined.propTypes = propTypes;
SvgUndoOutlined.defaultProps = defaultProps;
export default SvgUndoOutlined;
