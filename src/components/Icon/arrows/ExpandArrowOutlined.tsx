import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgExpandArrowOutlined(props: ISvgProps) {
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
            d="M27 11.198a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h4.586l-6.293 6.293a1 1 0 0 0 1.414 1.414L27 6.612v4.586ZM5 21.198a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2H6.414l6.293-6.293a1 1 0 0 0-1.414-1.414L5 25.784v-4.586ZM12 4.198a1 1 0 0 1-1 1H6.414l6.293 6.293a1 1 0 0 1-1.414 1.414L5 6.612v4.586a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1ZM21 27.198a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v4.586l-6.293-6.293a1 1 0 0 0-1.414 1.414l6.293 6.293H21Z"
          />
        </svg>
      }
    </span>
  );
}
SvgExpandArrowOutlined.propTypes = propTypes;
SvgExpandArrowOutlined.defaultProps = defaultProps;
export default SvgExpandArrowOutlined;
