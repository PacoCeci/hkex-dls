import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBookFilled(props: ISvgProps) {
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
            d="M3.394 28.117c3.29-1.41 8.065-1.899 12.369-.948a1.005 1.005 0 0 0 .475 0c4.303-.951 9.079-.462 12.368.948a1 1 0 0 0 1.394-.92v-18.5a1.5 1.5 0 0 0-1.5-1.5H27v-1.37c0-.701-.497-1.345-1.237-1.468C22.379 3.8 18.639 4.75 16 6.87 13.361 4.75 9.621 3.8 6.237 4.36A1.484 1.484 0 0 0 5 5.827v1.37H3.5a1.5 1.5 0 0 0-1.5 1.5v18.5a1 1 0 0 0 1.394.919ZM15 8.64C12.93 6.843 9.85 5.933 7 6.27v14.965c2.729.201 5.67 1.203 8 2.833V8.64Zm10-2.37c-2.849-.337-5.93.573-8 2.37v15.428c2.33-1.63 5.271-2.632 8-2.833V6.27Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBookFilled.propTypes = propTypes;
SvgBookFilled.defaultProps = defaultProps;
export default SvgBookFilled;
