import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgWifiOutlined(props: ISvgProps) {
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
            d="M16.999 24.198a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM15.996 7.198a16.942 16.942 0 0 0-12.278 5.245 1 1 0 1 1-1.444-1.383 18.942 18.942 0 0 1 13.722-5.862c5.395 0 10.266 2.25 13.722 5.862a1 1 0 1 1-1.444 1.383 16.942 16.942 0 0 0-12.278-5.245Zm0 5.5a11.46 11.46 0 0 0-8.305 3.548 1 1 0 1 1-1.445-1.383 13.46 13.46 0 0 1 9.75-4.165c3.833 0 7.295 1.6 9.75 4.165a1 1 0 0 1-1.444 1.383 11.46 11.46 0 0 0-8.306-3.548Zm0 5.5c-1.703 0-3.24.71-4.333 1.851a1 1 0 0 1-1.445-1.383 7.978 7.978 0 0 1 5.778-2.468c2.272 0 4.323.948 5.778 2.468a1 1 0 0 1-1.445 1.383 5.978 5.978 0 0 0-4.333-1.85Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgWifiOutlined.propTypes = propTypes;
SvgWifiOutlined.defaultProps = defaultProps;
export default SvgWifiOutlined;
