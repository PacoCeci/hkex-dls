import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarFilled(props: ISvgProps) {
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
            d="M12 4a1 1 0 1 0-2 0v1H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-4V4a1 1 0 1 0-2 0v1h-8V4ZM6 7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6Zm5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9.5 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalendarFilled.propTypes = propTypes;
SvgCalendarFilled.defaultProps = defaultProps;
export default SvgCalendarFilled;
