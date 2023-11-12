import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPinOutlined(props: ISvgProps) {
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
            d="M20.317 3.25a1 1 0 0 0-1.149.394l-5.566 8.349c-2.401-.77-4.385-.506-5.819.015a7.916 7.916 0 0 0-1.807.932c-.245.17-.474.358-.693.561-.363.392-.377 1.017.01 1.404l5.293 5.293-7.293 7.293a1 1 0 1 0 1.414 1.414L12 21.612l5.293 5.293a1 1 0 0 0 1.414 0 6.75 6.75 0 0 0 .552-.683c.29-.417.646-1.024.931-1.807.521-1.434.786-3.417.016-5.819l8.349-5.566a1 1 0 0 0 .394-1.148c-.57-1.707-1.938-3.587-3.492-5.14-1.554-1.555-3.433-2.923-5.14-3.492ZM8.467 13.888a6.054 6.054 0 0 0-.932.43L17.88 24.664a6.06 6.06 0 0 0 .43-.931c.424-1.166.662-2.911-.238-5.162a1 1 0 0 1 .373-1.204l8.323-5.548c-.547-1.15-1.529-2.466-2.725-3.663-1.196-1.196-2.512-2.177-3.663-2.724l-5.548 8.322a1 1 0 0 1-1.203.374c-2.251-.9-3.996-.663-5.162-.239Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPinOutlined.propTypes = propTypes;
SvgPinOutlined.defaultProps = defaultProps;
export default SvgPinOutlined;
