import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserIdCardOutlined(props: ISvgProps) {
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
            d="M21 17.198a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 2.198a4 4 0 0 0-4 4H8a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-18a3 3 0 0 0-3-3h-4a4 4 0 0 0-4-4Zm4 8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2H8a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h.582a8.002 8.002 0 0 1 14.836 0H24a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-4v2Zm-4 15c2.22 0 4.16 1.206 5.198 3H10.803a5.999 5.999 0 0 1 5.197-3Zm-2-19a2 2 0 1 1 4 0v3h-4v-3Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserIdCardOutlined.propTypes = propTypes;
SvgUserIdCardOutlined.defaultProps = defaultProps;
export default SvgUserIdCardOutlined;
