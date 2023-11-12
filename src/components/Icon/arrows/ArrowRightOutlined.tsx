import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgArrowRightOutlined(props: ISvgProps) {
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
            d="M19.293 23.491a1 1 0 0 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414l-8-8a1 1 0 1 0-1.414 1.414l6.293 6.293H4a1 1 0 1 0 0 2h21.586l-6.293 6.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgArrowRightOutlined.propTypes = propTypes;
SvgArrowRightOutlined.defaultProps = defaultProps;
export default SvgArrowRightOutlined;
