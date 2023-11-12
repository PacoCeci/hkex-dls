import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgVideoFilled(props: ISvgProps) {
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
            d="M5.803 6.806C7.66 6.519 10.88 6.198 16 6.198c5.12 0 8.34.321 10.196.608a3.88 3.88 0 0 1 3.253 3.149c.27 1.435.551 3.57.55 6.266 0 2.69-.279 4.81-.55 6.233a3.869 3.869 0 0 1-3.241 3.135c-1.855.287-5.078.61-10.208.61s-8.352-.323-10.207-.61a3.869 3.869 0 0 1-3.242-3.135C2.28 21.03 2 18.91 2 16.22c0-2.696.28-4.831.551-6.266a3.88 3.88 0 0 1 3.252-3.15ZM20 16.198l-7-4v8l7-4Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgVideoFilled.propTypes = propTypes;
SvgVideoFilled.defaultProps = defaultProps;
export default SvgVideoFilled;
