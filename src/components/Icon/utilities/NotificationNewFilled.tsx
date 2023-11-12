import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgNotificationNewFilled(props: ISvgProps) {
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
            d="M29 7.198a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          />
          <path
            fill="currentColor"
            d="M19.17 5.772A8.945 8.945 0 0 0 17 5.253V3.198a1 1 0 1 0-2 0v2.055c-4.5.498-8 4.313-8 8.945v4c0 1.276-.426 2.355-.868 3.129-.235.41-.506.83-.842 1.167A1 1 0 0 0 6 24.198h20a1 1 0 0 0 .709-1.705c-.335-.338-.607-.756-.84-1.166-.443-.774-.869-1.853-.869-3.129v-4c0-.338-.019-.672-.055-1a6 6 0 0 1-5.775-7.426ZM16 28.198a2 2 0 0 1-2-2h-2a4 4 0 1 0 8 0h-2a2 2 0 0 1-2 2Z"
          />
        </svg>
      }
    </span>
  );
}
SvgNotificationNewFilled.propTypes = propTypes;
SvgNotificationNewFilled.defaultProps = defaultProps;
export default SvgNotificationNewFilled;
