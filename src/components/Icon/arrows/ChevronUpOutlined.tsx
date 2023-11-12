import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChevronUpOutlined(props: ISvgProps) {
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
            d="M7.293 20.905a1 1 0 0 0 1.414 0L16 13.612l7.293 7.293a1 1 0 1 0 1.414-1.414l-8-8a1 1 0 0 0-1.414 0l-8 8a1 1 0 0 0 0 1.414Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChevronUpOutlined.propTypes = propTypes;
SvgChevronUpOutlined.defaultProps = defaultProps;
export default SvgChevronUpOutlined;
