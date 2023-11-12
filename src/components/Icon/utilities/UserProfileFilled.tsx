import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserProfileFilled(props: ISvgProps) {
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
            d="M14 12.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 7.198a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a1 1 0 0 1-1-1 1 1 0 1 0-2 0 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1 1 1 0 1 0-2 0 1 1 0 0 1-1 1H5a3 3 0 0 1-3-3v-18Zm14 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 5a6.002 6.002 0 0 0-5.88 4.801 1 1 0 0 0 1.96.398 4.002 4.002 0 0 1 7.84 0 1 1 0 1 0 1.96-.398A6.002 6.002 0 0 0 12 17.198Zm6-3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserProfileFilled.propTypes = propTypes;
SvgUserProfileFilled.defaultProps = defaultProps;
export default SvgUserProfileFilled;
