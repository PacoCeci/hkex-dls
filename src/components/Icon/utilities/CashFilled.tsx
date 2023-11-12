import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCashFilled(props: ISvgProps) {
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
            d="M16 14.198a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 9.198a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-10Zm16 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-10-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm13.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M29 10.198a1 1 0 0 1 1 1v11a4 4 0 0 1-4 4H7a1 1 0 1 1 0-2h19a2 2 0 0 0 2-2v-11a1 1 0 0 1 1-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCashFilled.propTypes = propTypes;
SvgCashFilled.defaultProps = defaultProps;
export default SvgCashFilled;
