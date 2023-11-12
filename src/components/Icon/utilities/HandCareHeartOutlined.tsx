import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHandCareHeartOutlined(props: ISvgProps) {
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
            d="M8.525 4.73a5.204 5.204 0 0 1 7.372 0l.103.103.103-.104a5.204 5.204 0 0 1 7.372 0 5.231 5.231 0 0 1 0 7.387l-6.767 6.788a1 1 0 0 1-1.416 0l-6.767-6.788a5.232 5.232 0 0 1 0-7.387Zm3.686.468c-.85 0-1.667.34-2.27.943a3.231 3.231 0 0 0 0 4.563L16 16.782l6.058-6.078a3.231 3.231 0 0 0 0-4.563 3.204 3.204 0 0 0-4.538 0l-.812.814a1 1 0 0 1-1.416 0l-.812-.814a3.204 3.204 0 0 0-2.27-.943ZM24 16.698a2.5 2.5 0 0 1 5 0v5.5a7 7 0 0 1-1.4 4.2l-1.8 2.4a1 1 0 0 1-1.6-1.2l1.8-2.4a5 5 0 0 0 1-3v-5.5a.5.5 0 0 0-1 0v4.5a1 1 0 1 1-2 0v-4.5ZM8 16.698a2.5 2.5 0 0 0-5 0v5.5a7 7 0 0 0 1.4 4.2l1.8 2.4a1 1 0 1 0 1.6-1.2l-1.8-2.4a5 5 0 0 1-1-3v-5.5a.5.5 0 0 1 1 0v4.5a1 1 0 1 0 2 0v-4.5Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M25.666 22.497a2.5 2.5 0 0 0-4.33-2.5l-1.934 3.35a3 3 0 0 0-.402 1.5v3.351a1 1 0 1 0 2 0v-3.351a1 1 0 0 1 .134-.5l1.934-3.35a.5.5 0 1 1 .866.5l-1.5 2.598a1 1 0 0 0 1.732 1l1.5-2.598ZM6.334 22.497a2.5 2.5 0 1 1 4.33-2.5l1.934 3.35a3 3 0 0 1 .402 1.5v3.351a1 1 0 1 1-2 0v-3.351a1 1 0 0 0-.134-.5l-1.934-3.35a.5.5 0 1 0-.866.5l1.5 2.598a1 1 0 0 1-1.732 1l-1.5-2.598Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHandCareHeartOutlined.propTypes = propTypes;
SvgHandCareHeartOutlined.defaultProps = defaultProps;
export default SvgHandCareHeartOutlined;
