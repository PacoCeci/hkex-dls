import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFaceIdOutlined(props: ISvgProps) {
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
            d="M4 22.198a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1ZM28 10.198a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 1 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1ZM10 4.198a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0v-3a3 3 0 0 1 3-3h3a1 1 0 0 1 1 1ZM22 28.198a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3h-3a1 1 0 0 1-1-1ZM10 9.198a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1ZM22 9.198a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1ZM16 9.198a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3h-.5a1 1 0 1 1 0-2h.5a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1ZM10.387 21.498a1 1 0 0 1 1.414-.014A5.977 5.977 0 0 0 16 23.198a5.977 5.977 0 0 0 4.2-1.714 1 1 0 1 1 1.399 1.428A7.977 7.977 0 0 1 16 25.198a7.977 7.977 0 0 1-5.599-2.286 1 1 0 0 1-.014-1.414Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgFaceIdOutlined.propTypes = propTypes;
SvgFaceIdOutlined.defaultProps = defaultProps;
export default SvgFaceIdOutlined;
