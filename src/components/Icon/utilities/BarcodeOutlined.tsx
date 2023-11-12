import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBarcodeOutlined(props: ISvgProps) {
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
            d="M4 22.198a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1ZM28 10.198a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 1 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1ZM10 4.198a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0v-3a3 3 0 0 1 3-3h3a1 1 0 0 1 1 1ZM22 28.198a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3h-3a1 1 0 0 1-1-1ZM8 10.198a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-10a1 1 0 0 1 1-1ZM16 10.198a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM12 10.198a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM11 21.198a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1ZM20 10.198a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM24 10.198a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-10a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBarcodeOutlined.propTypes = propTypes;
SvgBarcodeOutlined.defaultProps = defaultProps;
export default SvgBarcodeOutlined;
