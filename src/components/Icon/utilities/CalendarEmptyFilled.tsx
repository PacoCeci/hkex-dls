import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarEmptyFilled(props: ISvgProps) {
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
            d="M12 4.198a1 1 0 1 0-2 0v1H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-18a3 3 0 0 0-3-3h-4v-1a1 1 0 1 0-2 0v1h-8v-1Zm-6 3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalendarEmptyFilled.propTypes = propTypes;
SvgCalendarEmptyFilled.defaultProps = defaultProps;
export default SvgCalendarEmptyFilled;
