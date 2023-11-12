import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleArrowRightFilled(props: ISvgProps) {
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
            d="M30 16.198c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14Zm-13.707 5.707a1 1 0 0 1 0-1.414l3.293-3.293H10a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleArrowRightFilled.propTypes = propTypes;
SvgCircleArrowRightFilled.defaultProps = defaultProps;
export default SvgCircleArrowRightFilled;
