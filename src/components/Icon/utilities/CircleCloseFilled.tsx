import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleCloseFilled(props: ISvgProps) {
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
            d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-9.05-4.95a1 1 0 0 1 0 1.414L17.414 16l3.536 3.535a1 1 0 0 1-1.415 1.415L16 17.414l-3.536 3.536a1 1 0 0 1-1.414-1.415L14.586 16l-3.536-3.536a1 1 0 0 1 1.414-1.414L16 14.586l3.536-3.536a1 1 0 0 1 1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleCloseFilled.propTypes = propTypes;
SvgCircleCloseFilled.defaultProps = defaultProps;
export default SvgCircleCloseFilled;
