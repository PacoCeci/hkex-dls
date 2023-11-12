import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCautionFilled(props: ISvgProps) {
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
            d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-12.5 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15 17a1 1 0 1 0 2 0v-7a1 1 0 1 0-2 0v7Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCautionFilled.propTypes = propTypes;
SvgCautionFilled.defaultProps = defaultProps;
export default SvgCautionFilled;
