import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgNewspaperOutlined(props: ISvgProps) {
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
            d="M2.586 5.284A2 2 0 0 1 4 4.698h19a2 2 0 0 1 2 2v17.5a1.5 1.5 0 1 0 3 0v-13a1 1 0 1 1 2 0v13a3.5 3.5 0 0 1-3.5 3.5H5a3 3 0 0 1-3-3v-18a2 2 0 0 1 .586-1.414Zm20.752 20.414a3.499 3.499 0 0 1-.338-1.5v-17.5H4v18a1 1 0 0 0 1 1h18.338Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 10.698a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5Zm2 1v3h7v-3h-7ZM8 21.698a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgNewspaperOutlined.propTypes = propTypes;
SvgNewspaperOutlined.defaultProps = defaultProps;
export default SvgNewspaperOutlined;
