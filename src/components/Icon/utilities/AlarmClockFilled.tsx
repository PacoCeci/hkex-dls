import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgAlarmClockFilled(props: ISvgProps) {
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
            d="M8.707 4.905a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4ZM23.293 3.491a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M22.241 25.257A10.988 10.988 0 0 0 27 16.198c0-6.075-4.925-11-11-11s-11 4.925-11 11c0 3.758 1.884 7.075 4.759 9.06l-1.59 2.385a1 1 0 0 0 1.663 1.11l1.674-2.512c1.372.615 2.893.957 4.494.957 1.6 0 3.122-.342 4.494-.957l1.674 2.512a1 1 0 0 0 1.664-1.11l-1.59-2.386ZM17 11.198a1 1 0 1 0-2 0v4h-2a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1v-5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgAlarmClockFilled.propTypes = propTypes;
SvgAlarmClockFilled.defaultProps = defaultProps;
export default SvgAlarmClockFilled;
