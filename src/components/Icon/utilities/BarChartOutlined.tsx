import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBarChartOutlined(props: ISvgProps) {
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
            d="M2 3.198a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v11h6v-5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v19h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-26Zm10 25v-12h6v12h-6Zm8 0v-18h6v18h-6Zm-10 0H4v-24h6v24Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBarChartOutlined.propTypes = propTypes;
SvgBarChartOutlined.defaultProps = defaultProps;
export default SvgBarChartOutlined;
