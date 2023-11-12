import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgTransmissionOutlined(props: ISvgProps) {
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
            d="M7.515 7.713c-4.687 4.686-4.687 12.284 0 16.97A1 1 0 1 1 6.1 26.098C.633 20.63.633 11.766 6.1 6.298a1 1 0 0 1 1.414 1.415ZM24.485 6.299a1 1 0 0 1 1.415 0c5.467 5.467 5.467 14.331 0 19.799a1 1 0 0 1-1.415-1.415c4.687-4.686 4.687-12.284 0-16.97a1 1 0 0 1 0-1.414Z"
          />
          <path
            fill="currentColor"
            d="M11.05 11.248a7 7 0 0 0 0 9.9 1 1 0 1 1-1.414 1.414 9 9 0 0 1 0-12.728 1 1 0 1 1 1.414 1.414ZM20.95 9.834a1 1 0 0 1 1.414 0 9 9 0 0 1 0 12.728 1 1 0 0 1-1.414-1.414 7 7 0 0 0 0-9.9 1 1 0 0 1 0-1.414Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 12.198a4 4 0 0 0-1 7.874v7.126a1 1 0 1 0 2 0v-7.126a4.002 4.002 0 0 0-1-7.874Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgTransmissionOutlined.propTypes = propTypes;
SvgTransmissionOutlined.defaultProps = defaultProps;
export default SvgTransmissionOutlined;
