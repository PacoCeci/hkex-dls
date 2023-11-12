import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCashOutlined(props: ISvgProps) {
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
            d="M23 8.198H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1Zm-18-2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3H5Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M29 10.198a1 1 0 0 1 1 1v11a4 4 0 0 1-4 4H7a1 1 0 1 1 0-2h19a2 2 0 0 0 2-2v-11a1 1 0 0 1 1-1ZM14 16.198a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M8 10.698a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 17.698a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCashOutlined.propTypes = propTypes;
SvgCashOutlined.defaultProps = defaultProps;
export default SvgCashOutlined;
