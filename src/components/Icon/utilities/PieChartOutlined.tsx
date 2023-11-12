import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPieChartOutlined(props: ISvgProps) {
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
            d="M13 9.254a9 9 0 1 0 9.944 9.944H14a1 1 0 0 1-1-1V9.254Zm-5.111-.202A11 11 0 0 1 14 7.198a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1A11 11 0 1 1 7.889 9.052Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17.293 3.491A1 1 0 0 1 18 3.198a11 11 0 0 1 11 11 1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-10a1 1 0 0 1 .293-.707ZM19 5.254v7.944h7.944A9 9 0 0 0 19 5.254Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPieChartOutlined.propTypes = propTypes;
SvgPieChartOutlined.defaultProps = defaultProps;
export default SvgPieChartOutlined;
