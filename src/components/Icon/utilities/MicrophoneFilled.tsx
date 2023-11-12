import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMicrophoneFilled(props: ISvgProps) {
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
            d="M11 7.198a5 5 0 0 1 10 0v9a5 5 0 0 1-10 0v-9Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M8 13.198a1 1 0 0 1 1 1v2a7 7 0 1 0 14 0v-2a1 1 0 1 1 2 0v2c0 4.633-3.5 8.448-8 8.945v3.055h4a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2h4v-3.055c-4.5-.497-8-4.312-8-8.945v-2a1 1 0 0 1 1-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMicrophoneFilled.propTypes = propTypes;
SvgMicrophoneFilled.defaultProps = defaultProps;
export default SvgMicrophoneFilled;
