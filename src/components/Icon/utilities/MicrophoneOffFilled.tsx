import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMicrophoneOffFilled(props: ISvgProps) {
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
            d="M11 7.198a5 5 0 0 1 10 0v2.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-22 22a1 1 0 1 1-1.414-1.414l4.675-4.675A8.962 8.962 0 0 1 7 16.198v-2a1 1 0 1 1 2 0v2c0 1.572.518 3.024 1.394 4.192l1.434-1.434A4.977 4.977 0 0 1 11 16.198v-9Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M15.293 21.148 21 15.441v.757a5 5 0 0 1-5.707 4.95Z"
          />
          <path
            fill="currentColor"
            d="m13.648 22.793-1.528 1.528a8.94 8.94 0 0 0 2.88.822v3.055h-4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-4v-3.055c4.5-.497 8-4.312 8-8.945v-2a1 1 0 1 0-2 0v2a7 7 0 0 1-9.352 6.595Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMicrophoneOffFilled.propTypes = propTypes;
SvgMicrophoneOffFilled.defaultProps = defaultProps;
export default SvgMicrophoneOffFilled;
