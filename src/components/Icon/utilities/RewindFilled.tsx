import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRewindFilled(props: ISvgProps) {
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
            d="M29.464 6.312a1 1 0 0 0-1.033.064l-13 9a1 1 0 0 0 0 1.644l13 9A1 1 0 0 0 30 25.198v-18a1 1 0 0 0-.536-.886Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.464 6.312a1 1 0 0 0-1.033.064l-13 9a1 1 0 0 0 0 1.644l13 9A1 1 0 0 0 17 25.198v-18a1 1 0 0 0-.536-.886Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgRewindFilled.propTypes = propTypes;
SvgRewindFilled.defaultProps = defaultProps;
export default SvgRewindFilled;
