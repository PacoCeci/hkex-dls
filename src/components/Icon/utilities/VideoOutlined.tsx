import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgVideoOutlined(props: ISvgProps) {
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
            d="M13.495 11.33a1 1 0 0 0-1.496.868v8a1 1 0 0 0 1.496.868l7-4a1 1 0 0 0 0-1.736l-7-4Zm4.489 4.868-3.985 2.277V13.92l3.984 2.277Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 6.198c-5.12 0-8.34.321-10.197.608a3.88 3.88 0 0 0-3.252 3.149C2.281 11.39 2 13.525 2 16.221c0 2.69.28 4.81.55 6.233a3.869 3.869 0 0 0 3.242 3.135c1.855.287 5.078.61 10.207.61 5.13 0 8.353-.323 10.208-.61a3.869 3.869 0 0 0 3.242-3.135c.27-1.423.55-3.543.55-6.233 0-2.695-.28-4.831-.551-6.266a3.88 3.88 0 0 0-3.253-3.15C24.34 6.52 21.12 6.199 16 6.199ZM6.108 8.782c1.736-.268 4.852-.584 9.89-.584s8.154.316 9.891.584a1.881 1.881 0 0 1 1.592 1.544c.25 1.327.517 3.338.517 5.895 0 2.552-.265 4.546-.515 5.86a1.87 1.87 0 0 1-1.583 1.531c-1.735.269-4.853.586-9.902.586-5.048 0-8.167-.317-9.901-.586a1.87 1.87 0 0 1-1.583-1.531C4.265 20.767 4 18.772 4 16.22c0-2.557.266-4.568.516-5.895A1.88 1.88 0 0 1 6.11 8.782Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgVideoOutlined.propTypes = propTypes;
SvgVideoOutlined.defaultProps = defaultProps;
export default SvgVideoOutlined;
