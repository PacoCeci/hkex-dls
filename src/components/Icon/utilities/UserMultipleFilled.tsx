import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserMultipleFilled(props: ISvgProps) {
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
            d="M6.5 8.698a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM4.929 19.127A10 10 0 0 1 22 26.198v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a10 10 0 0 1 2.929-7.07ZM19 4.198a1 1 0 0 1 1-1 5.5 5.5 0 0 1 0 11 1 1 0 1 1 0-2 3.5 3.5 0 1 0 0-7 1 1 0 0 1-1-1ZM22.265 17.223a1 1 0 0 1 1.29-.58A10 10 0 0 1 30 25.978v2.221a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h2v-1.22a8 8 0 0 0-5.156-7.465 1 1 0 0 1-.579-1.29Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserMultipleFilled.propTypes = propTypes;
SvgUserMultipleFilled.defaultProps = defaultProps;
export default SvgUserMultipleFilled;
