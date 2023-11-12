import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSendMessageOutlined(props: ISvgProps) {
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
            d="M2.32 5.465a1 1 0 0 1 1.039-.2l26 10a1 1 0 0 1 0 1.866l-26 10a1 1 0 0 1-1.317-1.22l2.914-9.713-2.914-9.713a1 1 0 0 1 .278-1.02Zm4.424 11.733-2.2 7.335 19.07-7.335H6.744Zm16.87-2H6.744l-2.2-7.335 19.07 7.335Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSendMessageOutlined.propTypes = propTypes;
SvgSendMessageOutlined.defaultProps = defaultProps;
export default SvgSendMessageOutlined;
