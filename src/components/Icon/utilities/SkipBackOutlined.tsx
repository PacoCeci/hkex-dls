import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSkipBackOutlined(props: ISvgProps) {
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
            d="M28.472 3.316a1 1 0 0 0-1.027.05l-18 12a1 1 0 0 0 0 1.664l18 12A1 1 0 0 0 29 28.198v-24a1 1 0 0 0-.528-.882ZM27 6.066V26.33L11.803 16.198 27 6.067ZM4 3.198a1 1 0 0 1 1 1v24a1 1 0 1 1-2 0v-24a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSkipBackOutlined.propTypes = propTypes;
SvgSkipBackOutlined.defaultProps = defaultProps;
export default SvgSkipBackOutlined;
