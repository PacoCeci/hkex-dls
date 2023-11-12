import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserRemoveOutlined(props: ISvgProps) {
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
            d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM15.559 16.897A8.02 8.02 0 0 0 4 24.005V26h7a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-3.01a10.02 10.02 0 0 1 14.441-8.887 1 1 0 0 1-.882 1.794ZM16 23a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserRemoveOutlined.propTypes = propTypes;
SvgUserRemoveOutlined.defaultProps = defaultProps;
export default SvgUserRemoveOutlined;
