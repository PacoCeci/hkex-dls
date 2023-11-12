import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUploadOutlined(props: ISvgProps) {
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
            d="M10.293 10.905a1 1 0 0 0 1.414 0L15 7.612v12.586a1 1 0 1 0 2 0V7.612l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414Z"
          />
          <path
            fill="currentColor"
            d="M4 18.198a1 1 0 0 1 1 1v5a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a1 1 0 0 1 1-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgUploadOutlined.propTypes = propTypes;
SvgUploadOutlined.defaultProps = defaultProps;
export default SvgUploadOutlined;
