import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBagOutlined(props: ISvgProps) {
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
            d="M16 3.198a6 6 0 0 0-6 6H7a2 2 0 0 0-2 2l-1 15a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2l-1-15a2 2 0 0 0-2-2h-3a6 6 0 0 0-6-6Zm4 6a4 4 0 0 0-8 0h8Zm-14 17 1-15h18l1 15H6Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBagOutlined.propTypes = propTypes;
SvgBagOutlined.defaultProps = defaultProps;
export default SvgBagOutlined;
