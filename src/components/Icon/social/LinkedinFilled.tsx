import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLinkedinFilled(props: ISvgProps) {
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
            d="M5.182 8.562a3.182 3.182 0 1 0 0-6.364 3.182 3.182 0 0 0 0 6.364Zm3.182 21.636v-19.09H2v19.09h6.364Zm2.545-19.09h5.727v2.476c.912-1.198 2.859-2.477 6.364-2.477 5.511 0 7 5.499 7 8.91v10.181h-6.364V20.016c0-1.272-.636-3.818-3.181-3.818-1.808 0-3.08 1.284-3.819 2.484v11.516H10.91v-19.09Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgLinkedinFilled.propTypes = propTypes;
SvgLinkedinFilled.defaultProps = defaultProps;
export default SvgLinkedinFilled;
