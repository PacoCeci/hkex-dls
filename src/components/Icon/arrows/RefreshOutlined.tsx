import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRefreshOutlined(props: ISvgProps) {
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
            d="M16.041 3.198c-7.18 0-13 5.82-13 13s5.82 13 13 13c6.815 0 12.405-5.244 12.956-11.918a1 1 0 0 0-1.994-.164c-.465 5.645-5.196 10.082-10.962 10.082-6.075 0-11-4.925-11-11s4.925-11 11-11c4.07 0 7.626 2.211 9.529 5.5H20.5a1 1 0 1 0 0 2H28a1 1 0 0 0 1-1v-7.5a1 1 0 1 0-2 0v5.005a12.99 12.99 0 0 0-10.959-6.005Z"
          />
        </svg>
      }
    </span>
  );
}
SvgRefreshOutlined.propTypes = propTypes;
SvgRefreshOutlined.defaultProps = defaultProps;
export default SvgRefreshOutlined;
