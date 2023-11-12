import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHandHeartFilled(props: ISvgProps) {
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
            d="M2 19.198a1 1 0 0 1 1-1h6a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4H3a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7 24.198a1 1 0 0 1 1-1h10a5 5 0 0 1 5 5 2 2 0 0 1-2 2H3a1 1 0 1 1 0-2h18a3 3 0 0 0-3-3H8a1 1 0 0 1-1-1ZM13.525 3.73a5.204 5.204 0 0 1 7.372 0l.103.103.103-.104a5.204 5.204 0 0 1 7.372 0 5.231 5.231 0 0 1 0 7.387l-6.767 6.788a1 1 0 0 1-1.416 0l-6.767-6.788a5.232 5.232 0 0 1 0-7.387Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHandHeartFilled.propTypes = propTypes;
SvgHandHeartFilled.defaultProps = defaultProps;
export default SvgHandHeartFilled;
