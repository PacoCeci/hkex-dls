import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFunnelFilled(props: ISvgProps) {
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
            d="M3 4.198a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v3.204a5 5 0 0 1-1.678 3.737L20 17.647v7.551a1 1 0 0 1-.553.895l-6 3A1 1 0 0 1 12 28.198v-10.55l-7.322-6.51A5 5 0 0 1 3 7.403V4.198Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgFunnelFilled.propTypes = propTypes;
SvgFunnelFilled.defaultProps = defaultProps;
export default SvgFunnelFilled;
