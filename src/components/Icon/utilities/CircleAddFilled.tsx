import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleAddFilled(props: ISvgProps) {
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
            d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-7 0a1 1 0 0 1-1 1h-5v5a1 1 0 1 1-2 0v-5h-5a1 1 0 1 1 0-2h5v-5a1 1 0 1 1 2 0v5h5a1 1 0 0 1 1 1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleAddFilled.propTypes = propTypes;
SvgCircleAddFilled.defaultProps = defaultProps;
export default SvgCircleAddFilled;
