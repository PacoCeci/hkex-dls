import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMinimiseChevronOutlined(props: ISvgProps) {
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
            d="M12 29.198a1 1 0 0 1-1-1v-7H4a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1ZM20 3.198a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1ZM3 12.198a1 1 0 0 1 1-1h7v-7a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1ZM29 20.198a1 1 0 0 1-1 1h-7v7a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgMinimiseChevronOutlined.propTypes = propTypes;
SvgMinimiseChevronOutlined.defaultProps = defaultProps;
export default SvgMinimiseChevronOutlined;
