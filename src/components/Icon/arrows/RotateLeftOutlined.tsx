import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRotateLeftOutlined(props: ISvgProps) {
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
            d="M5 4.198a1 1 0 0 0-2 0v7.5a1 1 0 0 0 1 1h7.5a1 1 0 1 0 0-2H6.471A10.996 10.996 0 0 1 16 5.198c6.075 0 11 4.925 11 11s-4.925 11-11 11c-.696 0-1.376-.064-2.035-.188a1 1 0 1 0-.368 1.966c.78.146 1.583.222 2.403.222 7.18 0 13-5.82 13-13s-5.82-13-13-13a12.99 12.99 0 0 0-11 6.07v-5.07ZM3.044 17.28a1 1 0 1 1 1.994-.164c.057.69.177 1.363.356 2.01a1 1 0 1 1-1.928.532 12.959 12.959 0 0 1-.422-2.378ZM5.784 22.575a1 1 0 0 0-.202 1.4 13.066 13.066 0 0 0 3.536 3.254 1 1 0 0 0 1.06-1.696 11.064 11.064 0 0 1-2.994-2.756 1 1 0 0 0-1.4-.202Z"
          />
        </svg>
      }
    </span>
  );
}
SvgRotateLeftOutlined.propTypes = propTypes;
SvgRotateLeftOutlined.defaultProps = defaultProps;
export default SvgRotateLeftOutlined;
