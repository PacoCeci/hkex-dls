import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgImageLibraryFilled(props: ISvgProps) {
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
            d="M5 10.198a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1h2v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-14a3 3 0 0 1 3-3h1v2H5Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 7.198a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-12Zm10 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6.962-.716L28 13.442v5.756a1 1 0 0 1-1 1H13.594l9.972-9.716a1 1 0 0 1 1.396 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgImageLibraryFilled.propTypes = propTypes;
SvgImageLibraryFilled.defaultProps = defaultProps;
export default SvgImageLibraryFilled;
