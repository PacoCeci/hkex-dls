import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgImageFilled(props: ISvgProps) {
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
            d="M2 8.198a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-16Zm12 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm9.707-1.207L28 16.784v7.414a1 1 0 0 1-1 1H9.586l12.707-12.707a1 1 0 0 1 1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgImageFilled.propTypes = propTypes;
SvgImageFilled.defaultProps = defaultProps;
export default SvgImageFilled;
