import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRemoveOutlined(props: ISvgProps) {
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
            d="M29 16.198a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h24a1 1 0 0 1 1 1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgRemoveOutlined.propTypes = propTypes;
SvgRemoveOutlined.defaultProps = defaultProps;
export default SvgRemoveOutlined;
