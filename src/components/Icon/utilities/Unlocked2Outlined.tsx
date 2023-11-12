import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUnlocked2Outlined(props: ISvgProps) {
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
            d="M16 2.198a7 7 0 0 0-7 7v3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3H11v-3a5 5 0 0 1 10 0h2a7 7 0 0 0-7-7Zm-10 13a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-12Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUnlocked2Outlined.propTypes = propTypes;
SvgUnlocked2Outlined.defaultProps = defaultProps;
export default SvgUnlocked2Outlined;
