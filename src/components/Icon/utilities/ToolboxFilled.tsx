import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgToolboxFilled(props: ISvgProps) {
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
            d="M27 9.198h-5.083a6.002 6.002 0 0 0-11.834 0H5a3 3 0 0 0-3 3v4h11a3 3 0 0 1 6 0h11v-4a3 3 0 0 0-3-3Zm-11-3a4.002 4.002 0 0 1 3.874 3h-7.748c.444-1.725 2.01-3 3.874-3Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M30 18.198H19a3 3 0 1 1-6 0H2v7a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-7Z"
          />
          <path
            fill="currentColor"
            d="M15 16.198a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z"
          />
        </svg>
      }
    </span>
  );
}
SvgToolboxFilled.propTypes = propTypes;
SvgToolboxFilled.defaultProps = defaultProps;
export default SvgToolboxFilled;
