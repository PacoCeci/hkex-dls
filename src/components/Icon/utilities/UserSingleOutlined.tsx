import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserSingleOutlined(props: ISvgProps) {
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
            d="M15.96 4.198a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm-7.5 5.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0ZM7.72 21.868a13.98 13.98 0 0 1 21.552 7.025 1 1 0 0 1-.952 1.305H3.6a1 1 0 0 1-.953-1.305 13.98 13.98 0 0 1 5.074-7.026Zm8.24-.686a11.98 11.98 0 0 0-10.904 7.016h21.807a11.98 11.98 0 0 0-10.903-7.016Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserSingleOutlined.propTypes = propTypes;
SvgUserSingleOutlined.defaultProps = defaultProps;
export default SvgUserSingleOutlined;
