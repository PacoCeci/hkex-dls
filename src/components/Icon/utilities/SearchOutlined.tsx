import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSearchOutlined(props: ISvgProps) {
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
            d="M22.749 24.361A11.952 11.952 0 0 1 15 27.198c-6.627 0-12-5.372-12-12 0-6.627 5.373-12 12-12s12 5.373 12 12c0 2.954-1.067 5.658-2.837 7.749l4.544 4.544a1 1 0 0 1-1.414 1.414l-4.544-4.544ZM25 15.198c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSearchOutlined.propTypes = propTypes;
SvgSearchOutlined.defaultProps = defaultProps;
export default SvgSearchOutlined;
