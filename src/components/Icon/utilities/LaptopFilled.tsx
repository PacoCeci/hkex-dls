import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLaptopFilled(props: ISvgProps) {
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
            d="M14 22.198a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 7.198a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11.75l2.634 4.814c1.09 2-.358 4.436-2.635 4.436H5.009c-2.277 0-3.725-2.436-2.635-4.436L5 18.946V7.198Zm1.595 13h18.817l2.465 4.522A1 1 0 0 1 27 26.198H5.009a1 1 0 0 1-.878-1.478l2.464-4.522Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgLaptopFilled.propTypes = propTypes;
SvgLaptopFilled.defaultProps = defaultProps;
export default SvgLaptopFilled;
