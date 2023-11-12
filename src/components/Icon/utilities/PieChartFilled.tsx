import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPieChartFilled(props: ISvgProps) {
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
            d="M18 3.198a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 11 11 0 0 0-11-11Z"
          />
          <path
            fill="currentColor"
            d="M14 7.198a11 11 0 1 0 11 11 1 1 0 0 0-1-1h-9v-9a1 1 0 0 0-1-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgPieChartFilled.propTypes = propTypes;
SvgPieChartFilled.defaultProps = defaultProps;
export default SvgPieChartFilled;
