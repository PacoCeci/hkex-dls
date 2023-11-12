import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBookmarkFilled(props: ISvgProps) {
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
            d="M16 22.198 7.511 28.99A.93.93 0 0 1 6 28.263V5.198a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v23.065a.93.93 0 0 1-1.511.726L16 22.2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBookmarkFilled.propTypes = propTypes;
SvgBookmarkFilled.defaultProps = defaultProps;
export default SvgBookmarkFilled;
