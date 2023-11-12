import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserCheckOutlined(props: ISvgProps) {
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
            d="M29.6 17.2a1 1 0 0 1 .2 1.4l-8.24 11a1 1 0 0 1-1.4.2l-5.5-4.12a1 1 0 1 1 1.2-1.6l4.7 3.52 7.64-10.2a1 1 0 0 1 1.4-.2ZM12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM13.559 16.161A8 8 0 0 0 4 24.001V26h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-3a10.003 10.003 0 0 1 6.174-9.231 10 10 0 0 1 10.893 2.163 1 1 0 0 1-1.414 1.415 8 8 0 0 0-4.094-2.186Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserCheckOutlined.propTypes = propTypes;
SvgUserCheckOutlined.defaultProps = defaultProps;
export default SvgUserCheckOutlined;
