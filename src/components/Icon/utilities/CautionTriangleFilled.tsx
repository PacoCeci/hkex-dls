import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCautionTriangleFilled(props: ISvgProps) {
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
            d="M3.159 25.026 14.253 5.132c.763-1.368 2.73-1.368 3.494 0L28.84 25.026c.744 1.333-.22 2.974-1.747 2.974H4.906c-1.526 0-2.49-1.641-1.747-2.974Zm14.34-2.526a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15 18a1 1 0 1 0 2 0v-5a1 1 0 0 0-2 0v5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCautionTriangleFilled.propTypes = propTypes;
SvgCautionTriangleFilled.defaultProps = defaultProps;
export default SvgCautionTriangleFilled;
