import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarAddFilled(props: ISvgProps) {
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
            d="M11 3.198a1 1 0 0 1 1 1v1h8v-1a1 1 0 1 1 2 0v1h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-18a3 3 0 0 1 3-3h4v-1a1 1 0 0 1 1-1Zm-6 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2Zm14 13a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalendarAddFilled.propTypes = propTypes;
SvgCalendarAddFilled.defaultProps = defaultProps;
export default SvgCalendarAddFilled;
