import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRedoOutlined(props: ISvgProps) {
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
            d="M25.529 10.698A10.996 10.996 0 0 0 16 5.198c-6.075 0-11 4.925-11 11s4.925 11 11 11a1 1 0 1 1 0 2c-7.18 0-13-5.82-13-13s5.82-13 13-13a12.99 12.99 0 0 1 11 6.07v-5.07a1 1 0 1 1 2 0v7.5a1 1 0 0 1-1 1h-7.5a1 1 0 1 1 0-2h5.029Z"
          />
        </svg>
      }
    </span>
  );
}
SvgRedoOutlined.propTypes = propTypes;
SvgRedoOutlined.defaultProps = defaultProps;
export default SvgRedoOutlined;
