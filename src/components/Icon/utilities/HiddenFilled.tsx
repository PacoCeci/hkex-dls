import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHiddenFilled(props: ISvgProps) {
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
            d="M27.707 4.491a1 1 0 0 1 0 1.414l-22 22a1 1 0 1 1-1.414-1.414l3.06-3.06a15.844 15.844 0 0 1-1.935-1.65A16.064 16.064 0 0 1 2.9 18.526a10.36 10.36 0 0 1-.638-1.28C2.13 16.916 2 16.558 2 16.197c0-.36.129-.718.262-1.048.148-.365.36-.802.638-1.281a16.064 16.064 0 0 1 2.518-3.253C7.683 8.351 11.175 6.198 16 6.198c2.717 0 5.012.683 6.902 1.684l3.39-3.391a1 1 0 0 1 1.415 0Zm-8.95 7.536-6.929 6.929a5 5 0 0 1 6.929-6.929Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M29.1 13.869a16.121 16.121 0 0 0-2.903-3.625L20.95 15.49a5 5 0 0 1-5.658 5.658l-4.227 4.227c1.456.51 3.099.822 4.935.822 4.825 0 8.317-2.152 10.582-4.418a16.06 16.06 0 0 0 2.518-3.253c.277-.479.49-.916.638-1.28.133-.33.262-.688.262-1.049 0-.36-.129-.718-.262-1.048-.148-.365-.36-.802-.638-1.281Z"
          />
        </svg>
      }
    </span>
  );
}
SvgHiddenFilled.propTypes = propTypes;
SvgHiddenFilled.defaultProps = defaultProps;
export default SvgHiddenFilled;
