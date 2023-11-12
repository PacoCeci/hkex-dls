import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgArrowIncreaseOutlined(props: ISvgProps) {
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
            d="M20 9.198a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-7h-7a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M29.707 8.491a1 1 0 0 1 0 1.414L18.4 21.212a2 2 0 0 1-2.8 0l-.007-.007L11 16.612l-7.293 7.293a1 1 0 1 1-1.414-1.414L9.6 15.184a2 2 0 0 1 2.8 0l.007.007L17 19.784 28.293 8.49a1 1 0 0 1 1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgArrowIncreaseOutlined.propTypes = propTypes;
SvgArrowIncreaseOutlined.defaultProps = defaultProps;
export default SvgArrowIncreaseOutlined;
