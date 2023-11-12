import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPauseFilled(props: ISvgProps) {
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
            d="M11 3.198a3 3 0 0 0-3 3v20a3 3 0 1 0 6 0v-20a3 3 0 0 0-3-3ZM21 3.198a3 3 0 0 0-3 3v20a3 3 0 1 0 6 0v-20a3 3 0 0 0-3-3Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPauseFilled.propTypes = propTypes;
SvgPauseFilled.defaultProps = defaultProps;
export default SvgPauseFilled;
