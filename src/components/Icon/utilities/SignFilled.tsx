import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSignFilled(props: ISvgProps) {
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
            d="M23.673 4.11a3.121 3.121 0 1 1 4.414 4.415l-10.91 10.889a1 1 0 0 1-.465.263l-4 1a1 1 0 0 1-1.213-1.213l1-4a1 1 0 0 1 .263-.464l10.91-10.89ZM3 28a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 28a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSignFilled.propTypes = propTypes;
SvgSignFilled.defaultProps = defaultProps;
export default SvgSignFilled;
