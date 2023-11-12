import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleArrowUpFilled(props: ISvgProps) {
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
            d="M16 2.198c7.732 0 14 6.268 14 14s-6.268 14-14 14-14-6.268-14-14 6.268-14 14-14Zm5.707 13.707a1 1 0 0 1-1.414 0L17 12.612v9.586a1 1 0 1 1-2 0v-9.586l-3.293 3.293a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleArrowUpFilled.propTypes = propTypes;
SvgCircleArrowUpFilled.defaultProps = defaultProps;
export default SvgCircleArrowUpFilled;
