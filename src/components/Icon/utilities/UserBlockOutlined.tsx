import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserBlockOutlined(props: ISvgProps) {
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
            d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM22.5 17a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM15 22.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M27.807 17.193a1 1 0 0 1 0 1.414l-9.2 9.2a1 1 0 0 1-1.414-1.414l9.2-9.2a1 1 0 0 1 1.414 0ZM9.77 14.238a9.978 9.978 0 0 1 4.455.008 1 1 0 1 1-.45 1.948A7.98 7.98 0 0 0 4 23.997V26h7a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1v-2.998a9.98 9.98 0 0 1 7.77-9.764Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserBlockOutlined.propTypes = propTypes;
SvgUserBlockOutlined.defaultProps = defaultProps;
export default SvgUserBlockOutlined;
