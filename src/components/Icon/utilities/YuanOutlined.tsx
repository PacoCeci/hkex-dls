import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgYuanOutlined(props: ISvgProps) {
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
            d="M6.4 2.398a1 1 0 0 1 1.4.2L16 13.531l8.2-10.933a1 1 0 1 1 1.6 1.2l-9 12a1 1 0 0 1-1.6 0l-9-12a1 1 0 0 1 .2-1.4Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 14.198a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0v-14a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 23.198a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1ZM8 19.198a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgYuanOutlined.propTypes = propTypes;
SvgYuanOutlined.defaultProps = defaultProps;
export default SvgYuanOutlined;
