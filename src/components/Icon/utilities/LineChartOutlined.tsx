import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLineChartOutlined(props: ISvgProps) {
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
            d="M3 2.198a1 1 0 0 1 1 1v25h25a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-26a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21.82 7.215a1 1 0 0 1 .761.17l7 5a1 1 0 1 1-1.162 1.627l-6.16-4.4-7.427 11.14a1 1 0 0 1-1.54.153l-5-5a1 1 0 1 1 1.415-1.414l4.138 4.137 7.323-10.985a1 1 0 0 1 .652-.428Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgLineChartOutlined.propTypes = propTypes;
SvgLineChartOutlined.defaultProps = defaultProps;
export default SvgLineChartOutlined;
