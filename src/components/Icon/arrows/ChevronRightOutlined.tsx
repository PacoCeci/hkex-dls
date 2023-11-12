import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChevronRightOutlined(props: ISvgProps) {
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
            d="M11.299 7.492a1 1 0 0 0 0 1.414l7.293 7.293-7.293 7.293a1 1 0 1 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414l-8-8a1 1 0 0 0-1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChevronRightOutlined.propTypes = propTypes;
SvgChevronRightOutlined.defaultProps = defaultProps;
export default SvgChevronRightOutlined;
