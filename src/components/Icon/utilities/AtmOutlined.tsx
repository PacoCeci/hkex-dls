import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgAtmOutlined(props: ISvgProps) {
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
            d="M5 28.198a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM9.017 8.014A1 1 0 0 1 10 7.198h12a1 1 0 0 1 .983.816l3 16A1 1 0 0 1 25 25.198H7a1 1 0 0 1-.983-1.184l3-16Zm1.813 1.184-2.625 14h15.59l-2.625-14H10.83Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 18.198a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 4.198a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h1v-3H5v3h1a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1v-5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgAtmOutlined.propTypes = propTypes;
SvgAtmOutlined.defaultProps = defaultProps;
export default SvgAtmOutlined;
