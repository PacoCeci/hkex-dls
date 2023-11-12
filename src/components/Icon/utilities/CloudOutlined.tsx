import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCloudOutlined(props: ISvgProps) {
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
            d="M12 8.198a8 8 0 1 0 0 16h11.002a5 5 0 1 0-1.967-9.6 1 1 0 0 1-1.353-.64A8.004 8.004 0 0 0 12 8.198Zm-10 8c0-5.523 4.477-10 10-10 4.186 0 7.77 2.571 9.26 6.219a7 7 0 1 1 1.743 13.781H12c-5.523 0-10-4.477-10-10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCloudOutlined.propTypes = propTypes;
SvgCloudOutlined.defaultProps = defaultProps;
export default SvgCloudOutlined;
