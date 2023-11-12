import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgShieldOutlined(props: ISvgProps) {
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
            d="M4.459 5.355C4.99 4.977 9.124 2.198 16 2.198s11.01 2.779 11.541 3.157c.315.225.459.571.459.893v6.95c0 6.648-2.755 10.869-5.619 13.432-2.833 2.536-5.738 3.424-6.082 3.523a1.075 1.075 0 0 1-.598 0c-.344-.1-3.249-.987-6.082-3.523C6.755 24.067 4 19.846 4 13.198v-6.95c0-.322.144-.668.459-.893ZM6 6.735v6.463c0 6.015 2.463 9.713 4.953 11.942 2.129 1.906 4.304 2.757 5.047 3.01.743-.253 2.918-1.104 5.047-3.01C23.537 22.91 26 19.213 26 13.198V6.735c-1.137-.699-4.637-2.537-10-2.537S7.137 6.036 6 6.735Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgShieldOutlined.propTypes = propTypes;
SvgShieldOutlined.defaultProps = defaultProps;
export default SvgShieldOutlined;
