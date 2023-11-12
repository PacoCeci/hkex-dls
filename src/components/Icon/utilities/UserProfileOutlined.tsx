import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserProfileOutlined(props: ISvgProps) {
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
            d="M2 7.198a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a1 1 0 0 1-1-1 1 1 0 1 0-2 0 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1 1 1 0 1 0-2 0 1 1 0 0 1-1 1H5a3 3 0 0 1-3-3v-18Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3.17a3.001 3.001 0 0 1 5.66 0h4.34a3.001 3.001 0 0 1 5.66 0H27a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1H5Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.12 22a6.002 6.002 0 0 1 11.76 0 1 1 0 0 1-1.96.397 4.002 4.002 0 0 0-7.84 0A1 1 0 0 1 6.12 22ZM12 14.198a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 14.198a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1ZM18 10.198a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserProfileOutlined.propTypes = propTypes;
SvgUserProfileOutlined.defaultProps = defaultProps;
export default SvgUserProfileOutlined;
