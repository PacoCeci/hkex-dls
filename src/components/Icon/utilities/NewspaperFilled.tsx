import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgNewspaperFilled(props: ISvgProps) {
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
            d="M2.586 5.284A2 2 0 0 1 4 4.698h19a2 2 0 0 1 2 2v17.5a1.5 1.5 0 1 0 3 0v-13a1 1 0 1 1 2 0v13a3.5 3.5 0 0 1-3.5 3.5H5a3 3 0 0 1-3-3v-18a2 2 0 0 1 .586-1.414ZM9 10.698a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H9Zm0 10a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H9Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgNewspaperFilled.propTypes = propTypes;
SvgNewspaperFilled.defaultProps = defaultProps;
export default SvgNewspaperFilled;
