import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLoopOutlined(props: ISvgProps) {
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
            d="M22.293 3.491a1 1 0 0 0 0 1.414l3.293 3.293H9a6 6 0 0 0-6 6v1a1 1 0 1 0 2 0v-1a4 4 0 0 1 4-4h16.586l-3.293 3.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0ZM28 16.198a1 1 0 0 0-1 1v1a4 4 0 0 1-4 4H6.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 1 0 1.414-1.414l-3.293-3.293H23a6 6 0 0 0 6-6v-1a1 1 0 0 0-1-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgLoopOutlined.propTypes = propTypes;
SvgLoopOutlined.defaultProps = defaultProps;
export default SvgLoopOutlined;
