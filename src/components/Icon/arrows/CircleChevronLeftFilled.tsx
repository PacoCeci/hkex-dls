import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleChevronLeftFilled(props: ISvgProps) {
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
            d="M30 16.198c0-7.732-6.268-14-14-14s-14 6.268-14 14 6.268 14 14 14 14-6.268 14-14Zm-11.793-3.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 1 0 1.414-1.414l-3.293-3.293 3.293-3.293Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleChevronLeftFilled.propTypes = propTypes;
SvgCircleChevronLeftFilled.defaultProps = defaultProps;
export default SvgCircleChevronLeftFilled;
