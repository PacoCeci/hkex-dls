import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgQrCodeOutlined(props: ISvgProps) {
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
            d="M25 20.198v4a1 1 0 0 1-1 1h-3v3a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h3v-3a1 1 0 1 1 2 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M28 21.198a1 1 0 0 1-1-1v-3H16a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 9.198a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM16 3.198a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM16 19.198a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1ZM23 28.198a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21 20.198a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1ZM5 5.198v6h6v-6H5Zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H4Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M6.5 7.198a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-2ZM6.5 23.198a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-2ZM22.5 7.198a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21 5.198v6h6v-6h-6Zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-8ZM5 21.198v6h6v-6H5Zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H4ZM3 16.198a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M27 23.698a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM11 15.698a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgQrCodeOutlined.propTypes = propTypes;
SvgQrCodeOutlined.defaultProps = defaultProps;
export default SvgQrCodeOutlined;
