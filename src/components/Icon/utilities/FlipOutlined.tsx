import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFlipOutlined(props: ISvgProps) {
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
            d="M16 5.198a8.004 8.004 0 0 0-7.802 6.221 1 1 0 1 1-1.95-.442C7.258 6.523 11.239 3.198 16 3.198a9.997 9.997 0 0 1 8.844 5.33l.818-3.053a1 1 0 1 1 1.932.518l-1.464 5.464a1 1 0 0 1-1.225.707L19.441 10.7a1 1 0 1 1 .518-1.932l3.201.858A8.001 8.001 0 0 0 16 5.198Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13 21.198a1 1 0 0 0-.341-.753l-8-7A1 1 0 0 0 3 14.199v14a1 1 0 0 0 1.659.753l8-7a1 1 0 0 0 .341-.753Zm-8 4.796v-9.592l5.481 4.796L5 25.994ZM19 21.198a1 1 0 0 1 .341-.753l8-7a1 1 0 0 1 1.659.753v14a1 1 0 0 1-1.658.753l-8-7a1 1 0 0 1-.342-.753Zm8-4.796-5.481 4.796L27 25.994v-9.592Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17 14.198a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0v-14Z"
          />
        </svg>
      }
    </span>
  );
}
SvgFlipOutlined.propTypes = propTypes;
SvgFlipOutlined.defaultProps = defaultProps;
export default SvgFlipOutlined;
