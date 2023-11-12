import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgTargetOutlined(props: ISvgProps) {
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
            d="M16 2.198a1 1 0 0 1 1 1v3.05a10.003 10.003 0 0 1 8.95 8.95H29a1 1 0 1 1 0 2h-3.05a10.003 10.003 0 0 1-8.95 8.95v3.05a1 1 0 1 1-2 0v-3.05a10.003 10.003 0 0 1-8.95-8.95H3a1 1 0 1 1 0-2h3.05A10.003 10.003 0 0 1 15 6.248v-3.05a1 1 0 0 1 1-1Zm-7.938 15H11a1 1 0 1 0 0-2H8.062A8.004 8.004 0 0 1 15 8.26v2.938a1 1 0 1 0 2 0V8.26a8.004 8.004 0 0 1 6.938 6.938H21a1 1 0 1 0 0 2h2.938A8.004 8.004 0 0 1 17 24.136v-2.938a1 1 0 1 0-2 0v2.938a8.004 8.004 0 0 1-6.938-6.938Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgTargetOutlined.propTypes = propTypes;
SvgTargetOutlined.defaultProps = defaultProps;
export default SvgTargetOutlined;
