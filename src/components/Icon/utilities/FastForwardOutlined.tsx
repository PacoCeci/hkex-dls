import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFastForwardOutlined(props: ISvgProps) {
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
            d="M2.536 6.312a1 1 0 0 1 1.033.064l13 9a1 1 0 0 1 0 1.644l-13 9A1 1 0 0 1 2 25.198v-18a1 1 0 0 1 .536-.886ZM4 9.107V23.29l10.243-7.092L4 9.107Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15.536 6.312a1 1 0 0 1 1.033.064l13 9a1 1 0 0 1 0 1.644l-13 9A1 1 0 0 1 15 25.198v-18a1 1 0 0 1 .536-.886ZM17 9.107V23.29l10.243-7.092L17 9.107Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgFastForwardOutlined.propTypes = propTypes;
SvgFastForwardOutlined.defaultProps = defaultProps;
export default SvgFastForwardOutlined;
