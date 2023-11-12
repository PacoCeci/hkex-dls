import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleOutlined(props: ISvgProps) {
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
        </svg>
      }
    </span>
  );
}
SvgCircleOutlined.propTypes = propTypes;
SvgCircleOutlined.defaultProps = defaultProps;
export default SvgCircleOutlined;
