import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPrinterFilled(props: ISvgProps) {
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
            d="M12 20.198a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM13 23.198a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 6.198a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5H6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2v-2Zm14 0v2H10v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm0 11H10v10h12v-10Zm-15-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgPrinterFilled.propTypes = propTypes;
SvgPrinterFilled.defaultProps = defaultProps;
export default SvgPrinterFilled;
