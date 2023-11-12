import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgOrderDownFilled(props: ISvgProps) {
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
            d="M15.143 21.713a1 1 0 0 0 1.715 0l6-10A1 1 0 0 0 22 10.198H10a1 1 0 0 0-.857 1.515l6 10Z"
          />
        </svg>
      }
    </span>
  );
}
SvgOrderDownFilled.propTypes = propTypes;
SvgOrderDownFilled.defaultProps = defaultProps;
export default SvgOrderDownFilled;
