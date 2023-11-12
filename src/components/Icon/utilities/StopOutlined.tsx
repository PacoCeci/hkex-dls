import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgStopOutlined(props: ISvgProps) {
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
            d="M25 5.198H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-18a2 2 0 0 0-2-2Zm-18-2a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4v-18a4 4 0 0 0-4-4H7Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgStopOutlined.propTypes = propTypes;
SvgStopOutlined.defaultProps = defaultProps;
export default SvgStopOutlined;
