import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgVisibleFilled(props: ISvgProps) {
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
            d="M5.418 10.616C7.683 8.351 11.175 6.198 16 6.198c4.825 0 8.317 2.153 10.582 4.418a16.061 16.061 0 0 1 2.518 3.253c.277.479.49.916.638 1.28.133.331.262.689.262 1.05 0 .36-.129.717-.262 1.047-.148.365-.36.802-.638 1.281a16.06 16.06 0 0 1-2.518 3.253c-2.265 2.266-5.757 4.418-10.582 4.418-4.825 0-8.317-2.152-10.582-4.418A16.064 16.064 0 0 1 2.9 18.527a10.36 10.36 0 0 1-.638-1.28C2.13 16.916 2 16.558 2 16.197c0-.36.129-.718.262-1.048.148-.365.36-.802.638-1.281a16.064 16.064 0 0 1 2.518-3.253ZM16 21.198a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgVisibleFilled.propTypes = propTypes;
SvgVisibleFilled.defaultProps = defaultProps;
export default SvgVisibleFilled;
