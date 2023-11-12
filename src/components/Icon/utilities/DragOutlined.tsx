import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDragOutlined(props: ISvgProps) {
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
            d="M3 13.198a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 19.198a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m15.48 3.849-2.613 3.266a.667.667 0 0 0 .52 1.083h5.226c.559 0 .87-.647.52-1.083l-2.612-3.266a.667.667 0 0 0-1.042 0ZM15.48 28.547l-2.613-3.266a.667.667 0 0 1 .52-1.083h5.226c.559 0 .87.647.52 1.083l-2.612 3.266a.667.667 0 0 1-1.042 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgDragOutlined.propTypes = propTypes;
SvgDragOutlined.defaultProps = defaultProps;
export default SvgDragOutlined;
