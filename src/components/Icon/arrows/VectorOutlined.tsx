import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgVectorOutlined(props: ISvgProps) {
  const { size, color } = props;
  return (
    <span className="hecl-icon">
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          viewBox="0 0 26 27"
          {...props}
        >
          <path
            fill="currentColor"
            d="M13 .198c-7.18 0-13 5.82-13 13s5.82 13 13 13c6.815 0 12.405-5.244 12.956-11.918a1 1 0 1 0-1.994-.164C23.497 19.76 18.766 24.198 13 24.198c-6.075 0-11-4.925-11-11s4.925-11 11-11c4.07 0 7.626 2.211 9.529 5.5h-5.07a1 1 0 1 0 0 2h7.5a1 1 0 0 0 1-1v-7.5a1 1 0 1 0-2 0v5.005A12.99 12.99 0 0 0 13 .198Z"
          />
        </svg>
      }
    </span>
  );
}
SvgVectorOutlined.propTypes = propTypes;
SvgVectorOutlined.defaultProps = defaultProps;
export default SvgVectorOutlined;
