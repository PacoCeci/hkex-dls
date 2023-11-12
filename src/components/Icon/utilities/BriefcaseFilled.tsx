import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBriefcaseFilled(props: ISvgProps) {
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
            d="M13 4.198a3 3 0 0 0-3 3v2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-5v-2a3 3 0 0 0-3-3h-6Zm7 5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2h8Zm-13 4a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Zm19 1a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0v-9Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBriefcaseFilled.propTypes = propTypes;
SvgBriefcaseFilled.defaultProps = defaultProps;
export default SvgBriefcaseFilled;
