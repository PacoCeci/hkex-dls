import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFirstAidOutlined(props: ISvgProps) {
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
            d="M19.5 19.698a1 1 0 1 0 0-2H17v-2.5a1 1 0 1 0-2 0v2.5h-2.5a1 1 0 1 0 0 2H15v2.5a1 1 0 1 0 2 0v-2.5h2.5Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13 4.198a3 3 0 0 0-3 3v2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-5v-2a3 3 0 0 0-3-3h-6Zm7 5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2h8Zm-16 3a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgFirstAidOutlined.propTypes = propTypes;
SvgFirstAidOutlined.defaultProps = defaultProps;
export default SvgFirstAidOutlined;
