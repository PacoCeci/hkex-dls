import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgShareFilled(props: ISvgProps) {
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
            d="M24 13.198a5 5 0 1 0-4.83-3.703l-7.235 3.618a5 5 0 1 0 0 6.171L19.17 22.9a5 5 0 1 0 .895-1.788l-7.235-3.618a5.008 5.008 0 0 0 0-2.594l7.235-3.618A4.991 4.991 0 0 0 24 13.198Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgShareFilled.propTypes = propTypes;
SvgShareFilled.defaultProps = defaultProps;
export default SvgShareFilled;
