import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgQuestionFilled(props: ISvgProps) {
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
            d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-14-5a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 1 1 5 3.874V18a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1 2 2 0 0 0 0-4Zm0 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgQuestionFilled.propTypes = propTypes;
SvgQuestionFilled.defaultProps = defaultProps;
export default SvgQuestionFilled;
