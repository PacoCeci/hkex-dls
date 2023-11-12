import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChevronUpBoldOutlined(props: ISvgProps) {
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
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.94 19.137a1.5 1.5 0 1 0 2.12 2.122l6.94-6.94 6.94 6.94a1.5 1.5 0 0 0 2.12-2.122l-8-8a1.5 1.5 0 0 0-2.12 0l-8 8Zm.706 1.415a.5.5 0 0 1 0-.708l8-8a.5.5 0 0 1 .708 0l8 8a.5.5 0 0 1-.708.707l-7.292-7.292a.5.5 0 0 0-.708 0l-7.292 7.293a.5.5 0 0 1-.708 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChevronUpBoldOutlined.propTypes = propTypes;
SvgChevronUpBoldOutlined.defaultProps = defaultProps;
export default SvgChevronUpBoldOutlined;
