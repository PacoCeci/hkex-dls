import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserShieldFilled(props: ISvgProps) {
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
            d="M4.459 5.355C4.99 4.976 9.124 2.198 16 2.198s11.01 2.778 11.541 3.157c.315.224.459.571.459.893v6.95c0 6.647-2.755 10.868-5.619 13.432-2.833 2.536-5.738 3.423-6.082 3.522a1.078 1.078 0 0 1-.598 0c-.344-.099-3.249-.986-6.082-3.523C6.755 24.067 4 19.846 4 13.199v-6.95c0-.322.144-.669.459-.893ZM6 6.735v6.463c0 6.014 2.463 9.712 4.953 11.941 2.129 1.906 4.304 2.758 5.047 3.01.743-.253 2.918-1.104 5.047-3.01C23.537 22.91 26 19.212 26 13.198V6.735c-1.137-.7-4.637-2.537-10-2.537S7.137 6.036 6 6.735Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 13.198a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 28.5c-1.544 0-2.5-1-4-2-.812.456-1.954-2.112-2.585-1.436-.414.445-.212-.378-.53.144-.288.472.087-.421-.384-.708-.472-.288-.645-.029-.357-.5.438-.72-.584.096 0-.5a11.001 11.001 0 0 1 15.71 0c.584.596-.292-.22.146.5.287.471-.029.712-.5 1-.472.287-.213.971-.5.5-.285-.467.076.113-.286-.292-.659-.738-1.344 1.28-2.214.792-1 1-2.956 2.5-4.5 2.5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserShieldFilled.propTypes = propTypes;
SvgUserShieldFilled.defaultProps = defaultProps;
export default SvgUserShieldFilled;
