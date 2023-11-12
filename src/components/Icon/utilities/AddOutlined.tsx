import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgAddOutlined(props: ISvgProps) {
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
            d="M17 4.198a1 1 0 1 0-2 0v11H4a1 1 0 1 0 0 2h11v11a1 1 0 1 0 2 0v-11h11a1 1 0 1 0 0-2H17v-11Z"
          />
        </svg>
      }
    </span>
  );
}
SvgAddOutlined.propTypes = propTypes;
SvgAddOutlined.defaultProps = defaultProps;
export default SvgAddOutlined;
