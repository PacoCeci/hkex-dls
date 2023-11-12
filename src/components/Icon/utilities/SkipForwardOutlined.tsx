import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSkipForwardOutlined(props: ISvgProps) {
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
            d="M3.528 3.316a1 1 0 0 1 1.027.05l18 12a1 1 0 0 1 0 1.664l-18 12A1 1 0 0 1 3 28.198v-24a1 1 0 0 1 .528-.882ZM5 6.066V26.33l15.197-10.132L5 6.067ZM28 3.198a1 1 0 0 1 1 1v24a1 1 0 1 1-2 0v-24a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSkipForwardOutlined.propTypes = propTypes;
SvgSkipForwardOutlined.defaultProps = defaultProps;
export default SvgSkipForwardOutlined;
