import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUnlockedFilled(props: ISvgProps) {
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
            d="M16 2.198a7 7 0 0 0-7 7v3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3H11v-3a5 5 0 0 1 10 0h2a7 7 0 0 0-7-7Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUnlockedFilled.propTypes = propTypes;
SvgUnlockedFilled.defaultProps = defaultProps;
export default SvgUnlockedFilled;
