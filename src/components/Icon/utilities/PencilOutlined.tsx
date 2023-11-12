import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPencilOutlined(props: ISvgProps) {
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
            d="M26.253 5.945a2.536 2.536 0 0 0-3.586 0L7.414 21.198 11 24.784 26.253 9.53c.99-.99.99-2.596 0-3.586ZM9.09 25.703l-2.596-2.596-1.039 3.635 3.635-1.039ZM21.253 4.531a4.536 4.536 0 0 1 6.414 6.414l-15.96 15.96a1 1 0 0 1-.432.255l-7 2a1 1 0 0 1-1.237-1.237l2-7a1 1 0 0 1 .255-.432l15.96-15.96Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPencilOutlined.propTypes = propTypes;
SvgPencilOutlined.defaultProps = defaultProps;
export default SvgPencilOutlined;
