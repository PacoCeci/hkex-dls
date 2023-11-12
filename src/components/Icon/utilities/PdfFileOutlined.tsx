import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPdfFileOutlined(props: ISvgProps) {
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
            d="M7 5.198a1 1 0 0 1 1-1h10v6a1 1 0 0 0 1 1h6v7a1 1 0 1 0 2 0v-7.672a3 3 0 0 0-.879-2.12l-5.328-5.33a3 3 0 0 0-2.121-.878H8a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3 1 1 0 1 0 0-2 1 1 0 0 1-1-1v-22Zm17.086 4L20 5.112v4.086h4.086Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 22.198a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11 23.198a1 1 0 0 1 1-1h.603a2.8 2.8 0 1 1 0 5.6h-.6a1 1 0 0 1 0-2h.6a.8.8 0 0 0 0-1.6H12a1 1 0 0 1-1-1ZM16.8 23.198a1 1 0 0 1 1-1 3.4 3.4 0 0 1 3.4 3.4v1.2a3.4 3.4 0 0 1-3.4 3.4 1 1 0 0 1-1-1v-6Zm2 1.42v3.16a1.4 1.4 0 0 0 .4-.98v-1.2a1.4 1.4 0 0 0-.4-.98ZM24.8 24.198a.2.2 0 0 0-.2.2v4.8a1 1 0 0 1-2 0v-4.8a2.2 2.2 0 0 1 2.2-2.2H26a1 1 0 1 1 0 2h-1.2Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M22.6 26.798a1 1 0 0 1 1-1h1.8a1 1 0 0 1 0 2h-1.8a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPdfFileOutlined.propTypes = propTypes;
SvgPdfFileOutlined.defaultProps = defaultProps;
export default SvgPdfFileOutlined;
