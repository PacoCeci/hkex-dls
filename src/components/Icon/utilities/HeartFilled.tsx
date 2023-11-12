import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHeartFilled(props: ISvgProps) {
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
            d="M16.008 7.09c-1.956-1.959-4-2.927-5.96-3.071-2.214-.163-4.172.737-5.59 2.163-2.79 2.806-3.658 7.887-.19 11.4l.036.034 11.033 10.122a.99.99 0 0 0 1.342 0l11.033-10.122.036-.035c3.45-3.494 2.577-8.575-.204-11.382-1.414-1.428-3.368-2.333-5.58-2.175-1.959.141-4 1.108-5.956 3.067Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHeartFilled.propTypes = propTypes;
SvgHeartFilled.defaultProps = defaultProps;
export default SvgHeartFilled;
