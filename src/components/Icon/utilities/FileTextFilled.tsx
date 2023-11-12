import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFileTextFilled(props: ISvgProps) {
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
            d="M18 10.198v-8H8a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-16h-8a1 1 0 0 1-1-1Zm-8 12a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2h-7Zm-1 3a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H10a1 1 0 0 0-1 1Z"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M20 9.198v-7l7 7h-7Z" />
        </svg>
      }
    </span>
  );
}
SvgFileTextFilled.propTypes = propTypes;
SvgFileTextFilled.defaultProps = defaultProps;
export default SvgFileTextFilled;
