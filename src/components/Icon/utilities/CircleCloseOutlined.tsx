import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleCloseOutlined(props: ISvgProps) {
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
            d="M16 28.198c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12Zm0 2c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M20.95 11.248a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.415-1.414l8.485-8.486a1 1 0 0 1 1.415 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.05 11.248a1 1 0 0 1 1.414 0l8.486 8.486a1 1 0 0 1-1.415 1.414l-8.485-8.485a1 1 0 0 1 0-1.415Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleCloseOutlined.propTypes = propTypes;
SvgCircleCloseOutlined.defaultProps = defaultProps;
export default SvgCircleCloseOutlined;
