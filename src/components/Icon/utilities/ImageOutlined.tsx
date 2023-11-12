import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgImageOutlined(props: ISvgProps) {
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
            d="M10.5 17.198a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 5.198a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-16a3 3 0 0 0-3-3H5Zm22 2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4.586l12.707-12.707a1 1 0 0 1 1.414 0L28 16.784V8.198a1 1 0 0 0-1-1Zm1 12.414-5-5-10.586 10.586H27a1 1 0 0 0 1-1v-4.586Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgImageOutlined.propTypes = propTypes;
SvgImageOutlined.defaultProps = defaultProps;
export default SvgImageOutlined;
