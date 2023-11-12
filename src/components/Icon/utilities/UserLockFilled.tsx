import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserLockFilled(props: ISvgProps) {
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
            d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM9.77 14.238a9.978 9.978 0 0 1 4.455.008 1 1 0 1 1-.45 1.948A7.98 7.98 0 0 0 4 23.997V26h7a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1v-2.998a9.98 9.98 0 0 1 7.77-9.764ZM16 21a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-7Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M23 15a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 1 1 10 0v2a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserLockFilled.propTypes = propTypes;
SvgUserLockFilled.defaultProps = defaultProps;
export default SvgUserLockFilled;
