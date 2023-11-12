import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHomeFilled(props: ISvgProps) {
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
            d="M16.6 3.2a1 1 0 0 0-1.2 0l-12 9a1 1 0 0 0-.4.8v15a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a3 3 0 1 1 6 0v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V13a1 1 0 0 0-.4-.8l-12-9Z"
          />
        </svg>
      }
    </span>
  );
}
SvgHomeFilled.propTypes = propTypes;
SvgHomeFilled.defaultProps = defaultProps;
export default SvgHomeFilled;
