import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgGiftOutlined(props: ISvgProps) {
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
            d="M5 9.198a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H5Zm-3 1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 17.198a1 1 0 0 1 1 1v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9a1 1 0 0 1 2 0v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 7.198a1 1 0 0 1 1 1v21a1 1 0 1 1-2 0v-21a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.232 2.558a1 1 0 0 1 1.408-.128L16 6.896l5.36-4.466a1 1 0 0 1 1.28 1.536l-6 5a1 1 0 0 1-1.28 0l-6-5a1 1 0 0 1-.128-1.408Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgGiftOutlined.propTypes = propTypes;
SvgGiftOutlined.defaultProps = defaultProps;
export default SvgGiftOutlined;
