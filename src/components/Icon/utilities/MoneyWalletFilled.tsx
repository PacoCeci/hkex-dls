import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMoneyWalletFilled(props: ISvgProps) {
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
            d="M21.271 4.005 9.933 6.965a1 1 0 1 1-.506-1.936L20.76 2.071a1.98 1.98 0 0 1 2.452 1.45l.558 2.233a1 1 0 1 1-1.94.485l-.559-2.234ZM21 17.997a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-3Zm7 0h-5v3h5v-3Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M2.879 10.875A3 3 0 0 1 5 9.997h19a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0v5a1 1 0 1 1 2 0v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-14a3 3 0 0 1 .879-2.122Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMoneyWalletFilled.propTypes = propTypes;
SvgMoneyWalletFilled.defaultProps = defaultProps;
export default SvgMoneyWalletFilled;
