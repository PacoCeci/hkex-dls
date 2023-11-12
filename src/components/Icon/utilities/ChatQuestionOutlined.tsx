import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChatQuestionOutlined(props: ISvgProps) {
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
            d="M3 8.198a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-9.65L9.626 28.98A1 1 0 0 1 8 28.199v-3a5 5 0 0 1-5-5v-12Zm5-3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1a1 1 0 0 1 1 1v1.92l3.375-2.7a1 1 0 0 1 .625-.22h10a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3H8Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 9.198a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 1 1 5 3.874v1.126a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1 2 2 0 1 0 0-4Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.25 19.948a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgChatQuestionOutlined.propTypes = propTypes;
SvgChatQuestionOutlined.defaultProps = defaultProps;
export default SvgChatQuestionOutlined;
