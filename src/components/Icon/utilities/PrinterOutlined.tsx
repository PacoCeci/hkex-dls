import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPrinterOutlined(props: ISvgProps) {
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
            d="M8 12.198a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 20.198a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM13 23.198a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11 3.198a3 3 0 0 0-3 3v2H6a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h2v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5h2a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-2v-2a3 3 0 0 0-3-3H11Zm13 18h2a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5Zm-2-13v-2a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v2h12Zm-12 19v-10h12v10H10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPrinterOutlined.propTypes = propTypes;
SvgPrinterOutlined.defaultProps = defaultProps;
export default SvgPrinterOutlined;
