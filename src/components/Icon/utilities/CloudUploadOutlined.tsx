import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCloudUploadOutlined(props: ISvgProps) {
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
            d="M12 6.198a8 8 0 0 0-3.555 15.17 1 1 0 1 1-.89 1.79A10 10 0 0 1 2 14.198c0-5.523 4.477-10 10-10 4.186 0 7.77 2.571 9.26 6.219A7 7 0 1 1 24.166 24.1a1 1 0 1 1-.332-1.973 5 5 0 1 0-2.8-9.53 1 1 0 0 1-1.351-.64A8.004 8.004 0 0 0 12 6.198Z"
          />
          <path
            fill="currentColor"
            d="m15 17.612-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L17 17.612v9.586a1 1 0 1 1-2 0v-9.586Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCloudUploadOutlined.propTypes = propTypes;
SvgCloudUploadOutlined.defaultProps = defaultProps;
export default SvgCloudUploadOutlined;
