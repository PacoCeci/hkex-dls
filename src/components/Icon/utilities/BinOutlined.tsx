import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBinOutlined(props: ISvgProps) {
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
            d="M13 13.198a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1ZM19 13.198a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 7.198v-1a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h6a1 1 0 1 1 0 2h-1.109l-2.205 19.115a1 1 0 0 1-.994.885H8.308a1 1 0 0 1-.994-.885L5.11 9.198H4a1 1 0 0 1 0-2h6Zm2-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8v-1Zm-2.801 21-2.077-18h17.756l-2.077 18H9.2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBinOutlined.propTypes = propTypes;
SvgBinOutlined.defaultProps = defaultProps;
export default SvgBinOutlined;
