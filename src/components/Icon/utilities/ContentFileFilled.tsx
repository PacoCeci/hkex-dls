import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgContentFileFilled(props: ISvgProps) {
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
            d="M18 2.198v8a1 1 0 0 0 1 1h8v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-22a3 3 0 0 1 3-3h10Z"
          />
          <path fill="currentColor" d="M20 2.198v7h7l-7-7Z" />
        </svg>
      }
    </span>
  );
}
SvgContentFileFilled.propTypes = propTypes;
SvgContentFileFilled.defaultProps = defaultProps;
export default SvgContentFileFilled;
