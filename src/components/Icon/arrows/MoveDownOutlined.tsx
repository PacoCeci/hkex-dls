import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMoveDownOutlined(props: ISvgProps) {
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
            d="M28 27.198a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h24ZM9.293 16.491a1 1 0 0 1 1.414 0L15 20.784V4.198a1 1 0 1 1 2 0v16.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMoveDownOutlined.propTypes = propTypes;
SvgMoveDownOutlined.defaultProps = defaultProps;
export default SvgMoveDownOutlined;
