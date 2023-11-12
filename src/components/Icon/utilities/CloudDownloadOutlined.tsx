import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCloudDownloadOutlined(props: ISvgProps) {
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
            d="M12 6a8 8 0 0 0-3.555 15.169 1 1 0 0 1-.89 1.79A10 10 0 0 1 2 14C2 8.478 6.477 4 12 4c4.186 0 7.77 2.572 9.26 6.22a7 7 0 1 1 2.906 13.684 1 1 0 1 1-.332-1.973 5 5 0 1 0-2.8-9.53 1 1 0 0 1-1.351-.64A8.004 8.004 0 0 0 12 6Z"
          />
          <path
            fill="currentColor"
            d="m15 24.586-2.293-2.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L17 24.586V15a1 1 0 1 0-2 0v9.586Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCloudDownloadOutlined.propTypes = propTypes;
SvgCloudDownloadOutlined.defaultProps = defaultProps;
export default SvgCloudDownloadOutlined;
