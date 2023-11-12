import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleFishballMenuVerticalFilled(props: ISvgProps) {
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
            d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14 14-6.268 14-14Zm-12.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM16 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleFishballMenuVerticalFilled.propTypes = propTypes;
SvgCircleFishballMenuVerticalFilled.defaultProps = defaultProps;
export default SvgCircleFishballMenuVerticalFilled;
