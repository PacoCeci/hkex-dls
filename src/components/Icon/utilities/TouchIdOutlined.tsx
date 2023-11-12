import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgTouchIdOutlined(props: ISvgProps) {
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
            d="M16 4.198a9 9 0 0 0-9 9 1 1 0 1 1-2 0c0-6.075 4.925-11 11-11 2.002 0 3.882.536 5.5 1.472a1 1 0 0 1-1 1.732A8.954 8.954 0 0 0 16 4.198ZM23.4 6.399a1 1 0 0 1 1.4.199 10.956 10.956 0 0 1 2.2 6.6v10a1 1 0 1 1-2 0v-10c0-2.027-.67-3.895-1.799-5.4a1 1 0 0 1 .2-1.4ZM22 22.198a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM7 17.198a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6ZM14 19.198a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Z"
          />
          <path
            fill="currentColor"
            d="M17 13.198v16a1 1 0 1 0 2 0v-16a3 3 0 0 0-6 0v3a1 1 0 1 0 2 0v-3a1 1 0 1 1 2 0Z"
          />
          <path
            fill="currentColor"
            d="M9 27.198v-14a7 7 0 0 1 14 0v6a1 1 0 1 1-2 0v-6a5 5 0 0 0-10 0v14a1 1 0 1 1-2 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgTouchIdOutlined.propTypes = propTypes;
SvgTouchIdOutlined.defaultProps = defaultProps;
export default SvgTouchIdOutlined;
