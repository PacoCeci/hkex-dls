import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgAtmFilled(props: ISvgProps) {
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
            d="M4 3.198a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H5v-3h22v3h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H4ZM18 16.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.017 8.014A1 1 0 0 1 10 7.198h12a1 1 0 0 1 .983.816l3 16A1 1 0 0 1 25 25.198H7a1 1 0 0 1-.983-1.184l3-16ZM20 16.198a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M5 28.198a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgAtmFilled.propTypes = propTypes;
SvgAtmFilled.defaultProps = defaultProps;
export default SvgAtmFilled;
