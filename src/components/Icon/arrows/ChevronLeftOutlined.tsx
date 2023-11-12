import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChevronLeftOutlined(props: ISvgProps) {
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
            d="M20.713 24.906a1 1 0 0 0 0-1.414l-7.293-7.293 7.293-7.293a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChevronLeftOutlined.propTypes = propTypes;
SvgChevronLeftOutlined.defaultProps = defaultProps;
export default SvgChevronLeftOutlined;
