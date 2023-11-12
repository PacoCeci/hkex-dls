import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgGlobeOutlined(props: ISvgProps) {
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
            d="M16 30.198c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Zm0-2c.67 0 1.328-.055 1.969-.16l.227-.308c.787-1.062 1.473-2.622 1.97-4.532h-8.332c.497 1.91 1.183 3.47 1.97 4.532l.227.307c.64.106 1.298.161 1.969.161Zm-4.592-7a29.35 29.35 0 0 1-.393-4h9.97a29.35 29.35 0 0 1-.393 4h-9.184Zm10.818 2c-.353 1.49-.819 2.837-1.38 3.981a12.045 12.045 0 0 0 4.902-3.98h-3.522Zm4.686-2h-4.293c.2-1.27.326-2.613.366-4h4.974a11.924 11.924 0 0 1-1.047 4Zm-17.53 0H5.087a11.926 11.926 0 0 1-1.047-4h4.974c.04 1.387.166 2.73.366 4Zm-3.13 2h3.522c.353 1.49.819 2.837 1.38 3.981a12.045 12.045 0 0 1-4.902-3.98Zm4.764-8c.044-1.415.18-2.759.392-4h9.184c.212 1.241.348 2.585.393 4h-9.97Zm2.787-10.532c-.786 1.062-1.472 2.623-1.969 4.532h8.332c-.497-1.91-1.183-3.47-1.97-4.532l-.227-.307a12.085 12.085 0 0 0-3.938 0l-.228.307Zm9.182 10.532a31.675 31.675 0 0 0-.366-4h4.293c.567 1.235.93 2.583 1.047 4h-4.974Zm-.759-6h3.522a12.045 12.045 0 0 0-4.901-3.98c.56 1.143 1.026 2.49 1.38 3.98Zm-15.974 0h3.522c.353-1.49.819-2.837 1.38-3.98a12.045 12.045 0 0 0-4.902 3.98Zm3.13 2H5.087a11.927 11.927 0 0 0-1.047 4h4.974c.04-1.387.166-2.73.366-4Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgGlobeOutlined.propTypes = propTypes;
SvgGlobeOutlined.defaultProps = defaultProps;
export default SvgGlobeOutlined;
