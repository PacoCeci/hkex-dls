import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCreditCardFilled(props: ISvgProps) {
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
            d="M2 8.698v15a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-15a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm3-1a1 1 0 0 0-1 1v4h24v-4a1 1 0 0 0-1-1H5Zm16 12a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2h-3Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCreditCardFilled.propTypes = propTypes;
SvgCreditCardFilled.defaultProps = defaultProps;
export default SvgCreditCardFilled;
