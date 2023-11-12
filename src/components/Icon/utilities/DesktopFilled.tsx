import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDesktopFilled(props: ISvgProps) {
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
            d="M2 5.198a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-8.78l.6 3H23a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2.18l.6-3H3a1 1 0 0 1-1-1v-17Zm16.78 21-.6-3h-4.36l-.6 3h5.56Zm-14.78-7h24v2H4v-2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgDesktopFilled.propTypes = propTypes;
SvgDesktopFilled.defaultProps = defaultProps;
export default SvgDesktopFilled;
