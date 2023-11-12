import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgContentOrder1Outlined(props: ISvgProps) {
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
            d="M14.293 20.491 10 24.784V5.198a1 1 0 0 0-2 0v19.586L3.707 20.49a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414ZM15 4.198a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H15ZM14 10.198a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z"
          />
          <path
            fill="currentColor"
            d="M15 14.198a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z"
          />
        </svg>
      }
    </span>
  );
}
SvgContentOrder1Outlined.propTypes = propTypes;
SvgContentOrder1Outlined.defaultProps = defaultProps;
export default SvgContentOrder1Outlined;
