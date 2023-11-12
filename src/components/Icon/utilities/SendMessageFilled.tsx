import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSendMessageFilled(props: ISvgProps) {
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
            d="M3.359 5.265a1 1 0 0 0-1.317 1.22l2.616 8.72L26 16.198l-21.342.993-2.616 8.72a1 1 0 0 0 1.317 1.22l26-10a1 1 0 0 0 0-1.866l-26-10Z"
          />
        </svg>
      }
    </span>
  );
}
SvgSendMessageFilled.propTypes = propTypes;
SvgSendMessageFilled.defaultProps = defaultProps;
export default SvgSendMessageFilled;
