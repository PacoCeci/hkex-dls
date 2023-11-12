import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgEarthOutlined(props: ISvgProps) {
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
            d="M16 4C9.373 4 4 9.372 4 16c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12ZM2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18 2.14a1 1 0 0 1 1 1V7.5a4.5 4.5 0 0 1-4.5 4.5 2.5 2.5 0 0 0-2.5 2.5v3A4.5 4.5 0 0 1 7.5 22H4a1 1 0 1 1 0-2h3.5a2.5 2.5 0 0 0 2.5-2.5v-3a4.5 4.5 0 0 1 4.5-4.5A2.5 2.5 0 0 0 17 7.5V3.14a1 1 0 0 1 1-1ZM18.318 15.318A4.5 4.5 0 0 1 21.5 14h4.265a8.12 8.12 0 0 1 3.696.912 1 1 0 1 1-.922 1.775A6.12 6.12 0 0 0 25.757 16H21.5a2.5 2.5 0 0 0 0 5 3.5 3.5 0 0 1 3.5 3.5v1.74a1 1 0 1 1-2 0V24.5a1.5 1.5 0 0 0-1.5-1.5 4.5 4.5 0 0 1-3.182-7.682Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgEarthOutlined.propTypes = propTypes;
SvgEarthOutlined.defaultProps = defaultProps;
export default SvgEarthOutlined;
