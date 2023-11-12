import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRewindOutlined(props: ISvgProps) {
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
            d="M29.464 6.312a1 1 0 0 0-1.033.064l-13 9a1 1 0 0 0 0 1.644l13 9A1 1 0 0 0 30 25.198v-18a1 1 0 0 0-.536-.886ZM28 9.107V23.29l-10.243-7.092L28 9.107Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.464 6.312a1 1 0 0 0-1.033.064l-13 9a1 1 0 0 0 0 1.644l13 9A1 1 0 0 0 17 25.198v-18a1 1 0 0 0-.536-.886ZM15 9.107V23.29L4.757 16.198 15 9.107Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgRewindOutlined.propTypes = propTypes;
SvgRewindOutlined.defaultProps = defaultProps;
export default SvgRewindOutlined;
