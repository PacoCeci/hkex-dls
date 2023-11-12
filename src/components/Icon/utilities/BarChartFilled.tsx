import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBarChartFilled(props: ISvgProps) {
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
            d="M2 29.198a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 3.198a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0H4a1 1 0 1 1-2 0v-26ZM12 15.198a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14c0 .552.552 1 0 1a1 1 0 0 1-1-1h-4a1 1 0 0 1-1 1c-.552 0 0-.448 0-1v-14ZM20 9.198a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0h-4a1 1 0 1 1-2 0v-20Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBarChartFilled.propTypes = propTypes;
SvgBarChartFilled.defaultProps = defaultProps;
export default SvgBarChartFilled;
