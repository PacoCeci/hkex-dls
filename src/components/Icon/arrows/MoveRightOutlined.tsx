import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMoveRightOutlined(props: ISvgProps) {
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
            d="M27 4.198a1 1 0 1 1 2 0v24a1 1 0 1 1-2 0v-24ZM16.293 22.905a1 1 0 0 1 0-1.414l4.293-4.293H4a1 1 0 1 1 0-2h16.586l-4.293-4.293a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMoveRightOutlined.propTypes = propTypes;
SvgMoveRightOutlined.defaultProps = defaultProps;
export default SvgMoveRightOutlined;
