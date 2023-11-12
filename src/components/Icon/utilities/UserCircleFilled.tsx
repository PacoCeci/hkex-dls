import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserCircleFilled(props: ISvgProps) {
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
            d="M10 13.198a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15 29c-1.544 0-2 .674-3.5-1-1.346.756-2.383-2.8-3.186-1.482a1 1 0 1 1-1.708-1.04 11 11 0 0 1 18.788 0 1 1 0 0 1-1.708 1.04c-.803-1.318-2.84 2.436-4.186 1.68C18 29 16.544 29 15 29Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 4.198c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12Zm-14 12c0-7.732 6.268-14 14-14s14 6.268 14 14-6.268 14-14 14-14-6.268-14-14Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserCircleFilled.propTypes = propTypes;
SvgUserCircleFilled.defaultProps = defaultProps;
export default SvgUserCircleFilled;
