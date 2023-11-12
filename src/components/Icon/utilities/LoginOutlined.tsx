import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLoginOutlined(props: ISvgProps) {
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
            d="M3 6.198a3 3 0 0 1 3-3h10a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h10a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-20Z"
          />
          <path
            fill="currentColor"
            d="M18.707 21.905a1 1 0 0 0 0-1.414l-3.293-3.293H28a1 1 0 1 0 0-2H15.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgLoginOutlined.propTypes = propTypes;
SvgLoginOutlined.defaultProps = defaultProps;
export default SvgLoginOutlined;
