import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgVisibleOutlined(props: ISvgProps) {
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
            d="M4.011 16.198c.02.068.053.168.106.3.106.264.276.616.514 1.027a14.066 14.066 0 0 0 2.201 2.841c1.985 1.985 4.993 3.832 9.168 3.832 4.175 0 7.183-1.847 9.168-3.832a14.067 14.067 0 0 0 2.2-2.84c.24-.412.409-.764.515-1.028a2.96 2.96 0 0 0 .106-.3 2.96 2.96 0 0 0-.106-.3 8.392 8.392 0 0 0-.514-1.027 14.07 14.07 0 0 0-2.201-2.84C23.183 10.045 20.175 8.197 16 8.197c-4.175 0-7.183 1.848-9.168 3.832a14.069 14.069 0 0 0-2.2 2.841 8.393 8.393 0 0 0-.515 1.028 2.956 2.956 0 0 0-.106.3Zm1.407-5.582C7.683 8.351 11.175 6.198 16 6.198c4.825 0 8.317 2.153 10.582 4.418a16.061 16.061 0 0 1 2.518 3.253c.277.479.49.916.638 1.28.133.331.262.689.262 1.05 0 .36-.129.717-.262 1.047-.148.365-.36.802-.638 1.281a16.06 16.06 0 0 1-2.518 3.253c-2.265 2.266-5.757 4.418-10.582 4.418-4.825 0-8.317-2.152-10.582-4.418A16.064 16.064 0 0 1 2.9 18.527a10.36 10.36 0 0 1-.638-1.28C2.13 16.916 2 16.558 2 16.197c0-.36.129-.718.262-1.048.148-.365.36-.802.638-1.281a16.064 16.064 0 0 1 2.518-3.253Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 12.198a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgVisibleOutlined.propTypes = propTypes;
SvgVisibleOutlined.defaultProps = defaultProps;
export default SvgVisibleOutlined;
