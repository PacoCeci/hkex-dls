import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgAttachmentOutlined(props: ISvgProps) {
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
            d="M15.127 4.967a6.04 6.04 0 1 1 8.541 8.54l-9.62 9.621a3.52 3.52 0 0 1-4.978-4.977l9.62-9.62a1 1 0 1 1 1.415 1.413l-9.62 9.621a1.52 1.52 0 1 0 2.148 2.149l9.62-9.62a4.039 4.039 0 1 0-5.711-5.713l-9.621 9.62a6.559 6.559 0 1 0 9.275 9.276l11.097-11.096a1 1 0 0 1 1.414 1.414L17.611 26.69A8.559 8.559 0 0 1 5.507 14.588l9.62-9.621Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgAttachmentOutlined.propTypes = propTypes;
SvgAttachmentOutlined.defaultProps = defaultProps;
export default SvgAttachmentOutlined;
