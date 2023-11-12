import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgVideoCameraOutlined(props: ISvgProps) {
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
            d="M5 7.198a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2.196l6.47 4.044a1 1 0 0 0 1.53-.848v-14a1 1 0 0 0-1.53-.848L22 12.394v-2.196a3 3 0 0 0-3-3H5Zm17 7.554v2.892l6 3.75V11.002l-6 3.75Zm-2-4.554a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-12Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgVideoCameraOutlined.propTypes = propTypes;
SvgVideoCameraOutlined.defaultProps = defaultProps;
export default SvgVideoCameraOutlined;
