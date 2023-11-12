import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMinimiseArrowOutlined(props: ISvgProps) {
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
            d="M11 5.198v4.586L4.707 3.49a1 1 0 0 0-1.414 1.414l6.293 6.293H5a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0ZM21 5.198a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-4.586l6.293-6.293a1 1 0 0 0-1.414-1.414L21 9.784V5.198ZM11 27.198a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1H5a1 1 0 1 0 0 2h4.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L11 22.612v4.586ZM27 21.198a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-4.586l6.293 6.293a1 1 0 1 0 1.414-1.414l-6.293-6.293H27Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMinimiseArrowOutlined.propTypes = propTypes;
SvgMinimiseArrowOutlined.defaultProps = defaultProps;
export default SvgMinimiseArrowOutlined;
