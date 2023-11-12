import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPencilFilled(props: ISvgProps) {
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
            d="M21.253 4.527a4.536 4.536 0 1 1 6.414 6.414L12.414 26.194 6 19.779 21.253 4.527ZM4.877 21.485l-1.838 6.434a1 1 0 0 0 1.236 1.236l6.434-1.838-5.832-5.832Z"
          />
        </svg>
      }
    </span>
  );
}
SvgPencilFilled.propTypes = propTypes;
SvgPencilFilled.defaultProps = defaultProps;
export default SvgPencilFilled;
