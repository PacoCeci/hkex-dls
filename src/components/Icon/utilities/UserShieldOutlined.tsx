import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserShieldOutlined(props: ISvgProps) {
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
            d="M4.459 5.355C4.99 4.977 9.124 2.198 16 2.198s11.01 2.779 11.541 3.157c.315.225.459.571.459.893v6.95c0 6.648-2.755 10.868-5.619 13.432-2.833 2.536-5.738 3.423-6.082 3.523a1.075 1.075 0 0 1-.598 0c-.344-.1-3.249-.987-6.082-3.523C6.755 24.066 4 19.846 4 13.198v-6.95c0-.322.144-.668.459-.893ZM6 6.735v6.463c0 6.015 2.463 9.713 4.953 11.942 2.129 1.905 4.304 2.757 5.047 3.01.743-.253 2.918-1.105 5.047-3.01C23.537 22.91 26 19.213 26 13.198V6.735c-1.137-.699-4.637-2.537-10-2.537S7.137 6.036 6 6.735Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 9.198a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 22.2a9 9 0 0 0-6.585 2.864c-.414.445-.212-.378-.53.145-.288.471.087-.422-.384-.71-.472-.287-.645-.028-.357-.5.438-.718-.584.097 0-.5a10.998 10.998 0 0 1 15.71 0c.584.597-.292-.218.146.5.287.472-.029.713-.5 1-.472.288-.213.972-.5.5-.285-.466.076.114-.286-.29A8.999 8.999 0 0 0 16 22.2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserShieldOutlined.propTypes = propTypes;
SvgUserShieldOutlined.defaultProps = defaultProps;
export default SvgUserShieldOutlined;
