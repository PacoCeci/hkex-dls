import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSortVerticalOutlined(props: ISvgProps) {
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
            d="M27.293 10.905a1 1 0 1 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L21 6.612v15.586a1 1 0 1 0 2 0V6.612l4.293 4.293ZM15.293 21.491a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L9 25.784V10.198a1 1 0 0 1 2 0v15.586l4.293-4.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgSortVerticalOutlined.propTypes = propTypes;
SvgSortVerticalOutlined.defaultProps = defaultProps;
export default SvgSortVerticalOutlined;
