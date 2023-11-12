import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHourglassFilled(props: ISvgProps) {
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
            d="M4 3.198a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-2v4a9 9 0 0 1-4.873 8 9 9 0 0 1 4.873 8v4h2a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h2v-4a9 9 0 0 1 4.873-8 9 9 0 0 1-4.873-8v-4H5a1 1 0 0 1-1-1Zm7.67 7.5a4.998 4.998 0 0 0 4.33 2.5 4.998 4.998 0 0 0 4.33-2.5 1 1 0 0 0-.865-1.5h-6.93a1 1 0 0 0-.865 1.5Zm3.623 9.793a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 20 26.198h-8a1 1 0 0 1-.707-1.707l4-4Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHourglassFilled.propTypes = propTypes;
SvgHourglassFilled.defaultProps = defaultProps;
export default SvgHourglassFilled;
