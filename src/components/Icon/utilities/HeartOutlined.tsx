import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHeartOutlined(props: ISvgProps) {
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
            d="m5.665 16.133 10.343 9.489 10.343-9.49c2.487-2.537 1.949-6.312-.218-8.5-1.061-1.072-2.468-1.7-4.027-1.588-1.558.112-3.42.976-5.348 3.19a.994.994 0 0 1-1.5 0C13.33 7.02 11.467 6.154 9.904 6.039c-1.563-.115-2.973.511-4.036 1.58-2.168 2.18-2.711 5.954-.202 8.515ZM16.008 7.09c-1.956-1.96-4-2.928-5.96-3.072-2.214-.163-4.172.737-5.59 2.163-2.79 2.806-3.658 7.887-.19 11.4l.036.034 11.033 10.122a.99.99 0 0 0 1.342 0l11.033-10.122.036-.035c3.45-3.494 2.577-8.575-.204-11.382-1.414-1.428-3.368-2.333-5.58-2.175-1.959.141-4 1.108-5.956 3.067Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHeartOutlined.propTypes = propTypes;
SvgHeartOutlined.defaultProps = defaultProps;
export default SvgHeartOutlined;
