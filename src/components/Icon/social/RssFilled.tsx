import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRssFilled(props: ISvgProps) {
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
            d="M6.076 22.039A4.081 4.081 0 0 0 2 26.108c0 2.245 1.83 4.054 4.076 4.054 2.253 0 4.076-1.816 4.076-4.054a4.077 4.077 0 0 0-4.076-4.07Z"
          />
          <path
            fill="currentColor"
            d="M2 11.532v5.826c3.5 0 6.861 1.035 9.333 3.507 2.472 2.472 3.5 5.826 3.5 9.333h5.834c0-10.2-8.459-18.667-18.667-18.667Z"
          />
          <path
            fill="currentColor"
            d="M2 2.198v5.826c12.469 0 22.16 9.698 22.16 22.174H30c0-15.436-12.542-28-28-28Z"
          />
        </svg>
      }
    </span>
  );
}
SvgRssFilled.propTypes = propTypes;
SvgRssFilled.defaultProps = defaultProps;
export default SvgRssFilled;
