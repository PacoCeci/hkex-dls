import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLocationPinFilled(props: ISvgProps) {
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
            d="M5 13.169C5 7.11 9.925 2.199 16 2.199s11 4.911 11 10.97c0 11.03-10 17.03-11 17.03s-11-6-11-17.03Zm11 5.03a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgLocationPinFilled.propTypes = propTypes;
SvgLocationPinFilled.defaultProps = defaultProps;
export default SvgLocationPinFilled;
