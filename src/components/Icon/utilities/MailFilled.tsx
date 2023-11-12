import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMailFilled(props: ISvgProps) {
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
            d="M2.03 8.77c-.02.14-.03.283-.03.428v14a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-14c0-.145-.01-.288-.03-.427l-13.446 8.274a1 1 0 0 1-1.048 0L2.03 8.771Z"
          />
          <path
            fill="currentColor"
            d="M2.962 6.996 16 15.02l13.038-8.023A2.99 2.99 0 0 0 27 6.198H5a2.99 2.99 0 0 0-2.038.798Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMailFilled.propTypes = propTypes;
SvgMailFilled.defaultProps = defaultProps;
export default SvgMailFilled;
