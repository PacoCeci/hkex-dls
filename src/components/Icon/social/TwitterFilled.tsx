import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgTwitterFilled(props: ISvgProps) {
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
            d="M10.805 27.574c10.567 0 16.346-8.754 16.346-16.345 0-.249 0-.496-.017-.743A11.688 11.688 0 0 0 30 7.513c-1.048.464-2.16.769-3.3.903a5.764 5.764 0 0 0 2.526-3.177 11.51 11.51 0 0 1-3.648 1.394 5.75 5.75 0 0 0-9.79 5.24A16.31 16.31 0 0 1 3.948 5.87a5.749 5.749 0 0 0 1.78 7.668 5.693 5.693 0 0 1-2.608-.719v.073a5.747 5.747 0 0 0 4.609 5.631 5.734 5.734 0 0 1-2.594.099 5.752 5.752 0 0 0 5.367 3.99A11.525 11.525 0 0 1 2 24.992a16.265 16.265 0 0 0 8.805 2.577"
          />
        </svg>
      }
    </span>
  );
}
SvgTwitterFilled.propTypes = propTypes;
SvgTwitterFilled.defaultProps = defaultProps;
export default SvgTwitterFilled;
