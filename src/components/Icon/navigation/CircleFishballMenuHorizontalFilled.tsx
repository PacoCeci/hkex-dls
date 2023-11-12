import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleFishballMenuHorizontalFilled(props: ISvgProps) {
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
            d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-12.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleFishballMenuHorizontalFilled.propTypes = propTypes;
SvgCircleFishballMenuHorizontalFilled.defaultProps = defaultProps;
export default SvgCircleFishballMenuHorizontalFilled;
