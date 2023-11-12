import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgArrowUpOutlined(props: ISvgProps) {
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
            d="M23.293 12.905a1 1 0 1 0 1.414-1.414l-8-8a1 1 0 0 0-1.414 0l-8 8a1 1 0 1 0 1.414 1.414L15 6.612v21.586a1 1 0 1 0 2 0V6.612l6.293 6.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgArrowUpOutlined.propTypes = propTypes;
SvgArrowUpOutlined.defaultProps = defaultProps;
export default SvgArrowUpOutlined;
