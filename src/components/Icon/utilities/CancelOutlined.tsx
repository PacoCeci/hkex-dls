import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCancelOutlined(props: ISvgProps) {
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
            d="M30 16.198c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14Zm-2 0c0 6.628-5.373 12-12 12a11.952 11.952 0 0 1-7.749-2.837L25.163 8.45A11.952 11.952 0 0 1 28 16.2ZM6.837 23.947 23.749 7.035A11.952 11.952 0 0 0 16 4.198c-6.627 0-12 5.373-12 12 0 2.954 1.067 5.658 2.837 7.749Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCancelOutlined.propTypes = propTypes;
SvgCancelOutlined.defaultProps = defaultProps;
export default SvgCancelOutlined;
