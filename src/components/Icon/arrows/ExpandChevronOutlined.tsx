import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgExpandChevronOutlined(props: ISvgProps) {
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
            d="M4 19.198a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1ZM28 13.198a1 1 0 0 1-1-1v-7h-7a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1ZM13 4.198a1 1 0 0 1-1 1H5v7a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1ZM19 28.198a1 1 0 0 1 1-1h7v-7a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgExpandChevronOutlined.propTypes = propTypes;
SvgExpandChevronOutlined.defaultProps = defaultProps;
export default SvgExpandChevronOutlined;
