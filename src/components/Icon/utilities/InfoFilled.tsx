import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgInfoFilled(props: ISvgProps) {
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
            d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-3 3a1 1 0 0 0 1 1h1v6a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgInfoFilled.propTypes = propTypes;
SvgInfoFilled.defaultProps = defaultProps;
export default SvgInfoFilled;
