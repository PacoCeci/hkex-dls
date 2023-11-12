import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMailInboxFilled(props: ISvgProps) {
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
            d="M5 2.198a3 3 0 0 0-3 3v12h8a3 3 0 0 1 3 3 3 3 0 0 0 6 0 3 3 0 0 1 3-3h8v-12a3 3 0 0 0-3-3H5Z"
          />
          <path
            fill="currentColor"
            d="M30 19.198h-8a1 1 0 0 0-1 1 5 5 0 0 1-10 0 1 1 0 0 0-1-1H2v8a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-8Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMailInboxFilled.propTypes = propTypes;
SvgMailInboxFilled.defaultProps = defaultProps;
export default SvgMailInboxFilled;
