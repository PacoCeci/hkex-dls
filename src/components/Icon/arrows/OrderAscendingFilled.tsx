import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgOrderAscendingFilled(props: ISvgProps) {
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
            d="M15.152 27.728a1 1 0 0 0 1.696 0l5-8a1 1 0 0 0-.848-1.53H11a1 1 0 0 0-.848 1.53l5 8ZM15.152 4.668a1 1 0 0 1 1.696 0l5 8a1 1 0 0 1-.848 1.53H11a1 1 0 0 1-.848-1.53l5-8Z"
          />
          <path
            fill="#D6D8DA"
            d="M15.152 4.668a1 1 0 0 1 1.696 0l5 8a1 1 0 0 1-.848 1.53H11a1 1 0 0 1-.848-1.53l5-8Z"
          />
        </svg>
      }
    </span>
  );
}
SvgOrderAscendingFilled.propTypes = propTypes;
SvgOrderAscendingFilled.defaultProps = defaultProps;
export default SvgOrderAscendingFilled;
