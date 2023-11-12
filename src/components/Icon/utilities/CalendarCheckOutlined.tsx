import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarCheckOutlined(props: ISvgProps) {
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
            d="M19.707 18.905a1 1 0 0 0-1.414-1.414L15 20.784l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 4.198a1 1 0 1 0-2 0v1H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-18a3 3 0 0 0-3-3h-4v-1a1 1 0 1 0-2 0v1h-8v-1Zm8 4v-1h-8v1a1 1 0 1 1-2 0v-1H6a1 1 0 0 0-1 1v3h22v-3a1 1 0 0 0-1-1h-4v1a1 1 0 1 1-2 0Zm-15 18v-13h22v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalendarCheckOutlined.propTypes = propTypes;
SvgCalendarCheckOutlined.defaultProps = defaultProps;
export default SvgCalendarCheckOutlined;
