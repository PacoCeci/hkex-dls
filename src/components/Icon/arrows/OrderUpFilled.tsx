import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgOrderUpFilled(props: ISvgProps) {
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
            d="M16.858 10.684a1 1 0 0 0-1.716 0l-6 10A1 1 0 0 0 10 22.198h12a1 1 0 0 0 .858-1.514l-6-10Z"
          />
        </svg>
      }
    </span>
  );
}
SvgOrderUpFilled.propTypes = propTypes;
SvgOrderUpFilled.defaultProps = defaultProps;
export default SvgOrderUpFilled;
