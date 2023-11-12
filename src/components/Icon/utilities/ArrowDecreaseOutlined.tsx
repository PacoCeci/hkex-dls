import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgArrowDecreaseOutlined(props: ISvgProps) {
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
            d="M29 14.198a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h7v-7a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.293 8.491a1 1 0 0 1 1.414 0L11 15.784l4.6-4.6a2 2 0 0 1 2.8 0l.007.007 11.3 11.3a1 1 0 0 1-1.414 1.414L17 12.612l-4.6 4.6a2 2 0 0 1-2.8 0l-.007-.007-7.3-7.3a1 1 0 0 1 0-1.414Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgArrowDecreaseOutlined.propTypes = propTypes;
SvgArrowDecreaseOutlined.defaultProps = defaultProps;
export default SvgArrowDecreaseOutlined;
