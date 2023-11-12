import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCartOutlined(props: ISvgProps) {
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
            d="M28.949 3.882a1 1 0 0 0-1.265-.633l-1.786.596a3 3 0 0 0-2.033 2.514l-.093.839H4a1 1 0 0 0-.984 1.179l1.552 8.536a4 4 0 0 0 3.936 3.285h13.823l-.123 1.11a1 1 0 0 1-.994.89H9a1 1 0 1 0 0 2h12.21a3 3 0 0 0 2.982-2.669l1.66-14.949a1 1 0 0 1 .678-.838l1.786-.595a1 1 0 0 0 .633-1.265Zm-6.4 14.316H8.504a2 2 0 0 1-1.968-1.642L5.198 9.198H23.55l-1 9Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M13 27.698a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20.5 29.198a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCartOutlined.propTypes = propTypes;
SvgCartOutlined.defaultProps = defaultProps;
export default SvgCartOutlined;
