import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLinkOutlined(props: ISvgProps) {
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
            d="M25.829 6.37a4 4 0 0 1 0 5.657l-5.465 5.464a4 4 0 0 1-5.657 0 1 1 0 0 0-1.414 1.414 6 6 0 0 0 8.485 0l5.465-5.464a6 6 0 0 0-8.486-8.486l-3.035 3.036a1 1 0 0 0 1.414 1.414l3.036-3.035a4 4 0 0 1 5.656 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18.707 14.905a1 1 0 0 0 0-1.414 6 6 0 0 0-8.485 0l-5.465 5.465a6 6 0 0 0 8.486 8.485l3.035-3.036a1 1 0 0 0-1.414-1.414l-3.036 3.036a4 4 0 0 1-5.656-5.657l5.464-5.465a4 4 0 0 1 5.657 0 1 1 0 0 0 1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgLinkOutlined.propTypes = propTypes;
SvgLinkOutlined.defaultProps = defaultProps;
export default SvgLinkOutlined;
