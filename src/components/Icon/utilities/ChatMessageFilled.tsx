import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChatMessageFilled(props: ISvgProps) {
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
            d="M8 3.198a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5v3a1 1 0 0 0 1.625.781l4.726-3.78H24a5 5 0 0 0 5-5v-12a5 5 0 0 0-5-5H8Zm1 9a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChatMessageFilled.propTypes = propTypes;
SvgChatMessageFilled.defaultProps = defaultProps;
export default SvgChatMessageFilled;
