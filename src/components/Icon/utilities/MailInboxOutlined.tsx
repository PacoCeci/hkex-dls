import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMailInboxOutlined(props: ISvgProps) {
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
            d="M5 4.198a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1H5Zm-3 1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-22Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 18.198a1 1 0 0 1 1-1h7a3 3 0 0 1 3 3 3 3 0 0 0 6 0 3 3 0 0 1 3-3h7a1 1 0 1 1 0 2h-7a1 1 0 0 0-1 1 5 5 0 0 1-10 0 1 1 0 0 0-1-1H3a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgMailInboxOutlined.propTypes = propTypes;
SvgMailInboxOutlined.defaultProps = defaultProps;
export default SvgMailInboxOutlined;
