import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgClipboardFilled(props: ISvgProps) {
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
            d="M16 2.198a5.002 5.002 0 0 0-4.9 4H8a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-18a3 3 0 0 0-3-3h-3.1a5.002 5.002 0 0 0-4.9-4Zm1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-7.5 6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H10Zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgClipboardFilled.propTypes = propTypes;
SvgClipboardFilled.defaultProps = defaultProps;
export default SvgClipboardFilled;
