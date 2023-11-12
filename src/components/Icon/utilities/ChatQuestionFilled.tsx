import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChatQuestionFilled(props: ISvgProps) {
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
            d="M8 3.198a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5v3a1 1 0 0 0 1.625.781l4.726-3.78H24a5 5 0 0 0 5-5v-12a5 5 0 0 0-5-5H8Zm8 6a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 1 1 5 3.874v1.126a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1 2 2 0 1 0 0-4Zm0 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChatQuestionFilled.propTypes = propTypes;
SvgChatQuestionFilled.defaultProps = defaultProps;
export default SvgChatQuestionFilled;
