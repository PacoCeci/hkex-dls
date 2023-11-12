import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleArrowUpOutlined(props: ISvgProps) {
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
            d="M30 16.198c0-7.732-6.268-14-14-14s-14 6.268-14 14 6.268 14 14 14 14-6.268 14-14Zm-2 0c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12s12-5.372 12-12Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M20.293 15.905a1 1 0 1 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L15 12.612v9.586a1 1 0 1 0 2 0v-9.586l3.293 3.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleArrowUpOutlined.propTypes = propTypes;
SvgCircleArrowUpOutlined.defaultProps = defaultProps;
export default SvgCircleArrowUpOutlined;
