import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgGpsOutlined(props: ISvgProps) {
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
            d="M16 19.198a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17 3.198a1 1 0 1 0-2 0v3.05a10.003 10.003 0 0 0-8.95 8.95H3a1 1 0 1 0 0 2h3.05a10.003 10.003 0 0 0 8.95 8.95v3.05a1 1 0 1 0 2 0v-3.05a10.003 10.003 0 0 0 8.95-8.95H29a1 1 0 1 0 0-2h-3.05A10.003 10.003 0 0 0 17 6.248v-3.05Zm-1 21a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgGpsOutlined.propTypes = propTypes;
SvgGpsOutlined.defaultProps = defaultProps;
export default SvgGpsOutlined;
