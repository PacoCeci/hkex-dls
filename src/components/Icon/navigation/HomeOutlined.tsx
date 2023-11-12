import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHomeOutlined(props: ISvgProps) {
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
            d="M15.4 3.398a1 1 0 0 1 1.2 0l12 9a1 1 0 0 1 .4.8v15a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-15a1 1 0 0 1 .4-.8l12-9ZM5 13.698v13.5h6v-4a5 5 0 0 1 10 0v4h6v-13.5l-11-8.25-11 8.25Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgHomeOutlined.propTypes = propTypes;
SvgHomeOutlined.defaultProps = defaultProps;
export default SvgHomeOutlined;
