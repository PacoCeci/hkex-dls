import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgTableOutlined(props: ISvgProps) {
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
            d="M6 3.198a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-20a3 3 0 0 0-3-3H6Zm9 2H6a1 1 0 0 0-1 1v9h10v-10Zm2 0v10h10v-9a1 1 0 0 0-1-1h-9Zm-2 12H5v9a1 1 0 0 0 1 1h9v-10Zm2 10v-10h10v9a1 1 0 0 1-1 1h-9Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgTableOutlined.propTypes = propTypes;
SvgTableOutlined.defaultProps = defaultProps;
export default SvgTableOutlined;
