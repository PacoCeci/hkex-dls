import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLocked2Outlined(props: ISvgProps) {
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
            d="M9 9.198a7 7 0 1 1 14 0v3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-12a3 3 0 0 1 3-3h2v-3Zm12 0v3H11v-3a5 5 0 0 1 10 0Zm-14 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1H7Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgLocked2Outlined.propTypes = propTypes;
SvgLocked2Outlined.defaultProps = defaultProps;
export default SvgLocked2Outlined;
