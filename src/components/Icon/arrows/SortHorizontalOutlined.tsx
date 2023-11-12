import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSortHorizontalOutlined(props: ISvgProps) {
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
            d="M10.707 4.905a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 1 0 1.414-1.414l-4.293-4.293H22a1 1 0 1 0 0-2H6.414l4.293-4.293ZM21.293 16.905a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414l4.293-4.293H10a1 1 0 1 1 0-2h15.586l-4.293-4.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgSortHorizontalOutlined.propTypes = propTypes;
SvgSortHorizontalOutlined.defaultProps = defaultProps;
export default SvgSortHorizontalOutlined;
