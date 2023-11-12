import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgNotificationFilled(props: ISvgProps) {
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
            d="M17 3.198a1 1 0 1 0-2 0v2.055c-4.5.498-8 4.313-8 8.945v4c0 1.276-.426 2.355-.868 3.129-.235.41-.506.83-.842 1.167A1 1 0 0 0 6 24.198h20a1 1 0 0 0 .709-1.705c-.335-.338-.607-.756-.84-1.166-.443-.774-.869-1.853-.869-3.129v-4c0-4.632-3.5-8.448-8-8.945V3.198Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14 26.198a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2Z"
          />
        </svg>
      }
    </span>
  );
}
SvgNotificationFilled.propTypes = propTypes;
SvgNotificationFilled.defaultProps = defaultProps;
export default SvgNotificationFilled;
