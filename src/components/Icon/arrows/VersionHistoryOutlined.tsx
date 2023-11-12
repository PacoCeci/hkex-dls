import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgVersionHistoryOutlined(props: ISvgProps) {
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
            d="M5 4.198a1 1 0 0 0-2 0v7.5a1 1 0 0 0 1 1h7.5a1 1 0 1 0 0-2H6.471A10.996 10.996 0 0 1 16 5.198c6.075 0 11 4.925 11 11s-4.925 11-11 11c-5.766 0-10.497-4.437-10.962-10.082a1 1 0 0 0-1.994.164C3.595 23.954 9.184 29.198 16 29.198c7.18 0 13-5.82 13-13s-5.82-13-13-13a12.99 12.99 0 0 0-11 6.07v-5.07Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 8.198a1 1 0 0 1 1 1v6.586l4.707 4.707a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1-.293-.707v-7a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgVersionHistoryOutlined.propTypes = propTypes;
SvgVersionHistoryOutlined.defaultProps = defaultProps;
export default SvgVersionHistoryOutlined;
