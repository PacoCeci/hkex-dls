import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSignOutlined(props: ISvgProps) {
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
            d="M26.673 5.525a1.121 1.121 0 0 0-1.586 0L14.373 16.218l-.53 2.114 2.115-.528L26.673 7.11a1.121 1.121 0 0 0 0-1.586Zm-3-1.414a3.121 3.121 0 1 1 4.414 4.414l-10.91 10.889a1 1 0 0 1-.465.263l-4 1a1 1 0 0 1-1.213-1.213l1-4a1 1 0 0 1 .263-.464l10.91-10.89ZM3 28a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 28a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSignOutlined.propTypes = propTypes;
SvgSignOutlined.defaultProps = defaultProps;
export default SvgSignOutlined;
