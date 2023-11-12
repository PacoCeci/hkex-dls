import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDuplicateFilled(props: ISvgProps) {
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
            d="M7 10.198a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1h2v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-16a3 3 0 0 1 3-3h1v2H7Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13 2.198a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-16a3 3 0 0 0-3-3H13Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgDuplicateFilled.propTypes = propTypes;
SvgDuplicateFilled.defaultProps = defaultProps;
export default SvgDuplicateFilled;
