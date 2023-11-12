import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPhoneFilled(props: ISvgProps) {
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
            d="m12.48 4.41 1.832 4.275a2 2 0 0 1-.729 2.452l-1.622 1.082c1.539 3.48 4.539 6.48 8.018 8.018l1.082-1.622a2 2 0 0 1 2.452-.73l4.275 1.833A2 2 0 0 1 29 21.556v5.702c0 1.105-.898 2.008-2 1.936-7.03-.457-12.415-3.326-16.543-7.453-4.127-4.128-6.996-9.514-7.453-16.543-.072-1.102.831-2 1.936-2h5.702A2 2 0 0 1 12.48 4.41Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPhoneFilled.propTypes = propTypes;
SvgPhoneFilled.defaultProps = defaultProps;
export default SvgPhoneFilled;
