import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleChevronUpFilled(props: ISvgProps) {
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
            d="M16 30.198c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Zm3.293-11.793a1 1 0 1 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L16 15.112l3.293 3.293Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleChevronUpFilled.propTypes = propTypes;
SvgCircleChevronUpFilled.defaultProps = defaultProps;
export default SvgCircleChevronUpFilled;
