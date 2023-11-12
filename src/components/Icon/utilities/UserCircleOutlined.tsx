import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserCircleOutlined(props: ISvgProps) {
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
            d="M16 9.198a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 22.2a9 9 0 0 0-7.686 4.318 1 1 0 1 1-1.708-1.04 11 11 0 0 1 18.788 0 1 1 0 0 1-1.708 1.04A9 9 0 0 0 16 22.201Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 4.198c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12Zm-14 12c0-7.732 6.268-14 14-14s14 6.268 14 14-6.268 14-14 14-14-6.268-14-14Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserCircleOutlined.propTypes = propTypes;
SvgUserCircleOutlined.defaultProps = defaultProps;
export default SvgUserCircleOutlined;
