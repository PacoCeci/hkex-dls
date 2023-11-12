import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMoveLeftOutlined(props: ISvgProps) {
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
            d="M5 28.198a1 1 0 1 1-2 0v-24a1 1 0 1 1 2 0v24ZM15.707 9.491a1 1 0 0 1 0 1.414l-4.293 4.293H28a1 1 0 1 1 0 2H11.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMoveLeftOutlined.propTypes = propTypes;
SvgMoveLeftOutlined.defaultProps = defaultProps;
export default SvgMoveLeftOutlined;
