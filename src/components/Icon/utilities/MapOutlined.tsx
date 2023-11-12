import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMapOutlined(props: ISvgProps) {
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
            d="m20.667 25.198 7.576 2.841A1.3 1.3 0 0 0 30 26.822V8.1a1.3 1.3 0 0 0-.843-1.217l-8.034-3.013a1.3 1.3 0 0 0-.913 0L11.333 7.2 3.756 4.356A1.3 1.3 0 0 0 2 5.574v18.563a1.3 1.3 0 0 0 .824 1.209l8.044 3.169c.3.118.632.12.933.008l8.866-3.325ZM4 6.584V23.66l6.33 2.493V8.958L4 6.584Zm15.67 16.852-7.34 2.752V8.96l7.34-2.752v17.228Zm2 .002L28 25.812V8.584L21.67 6.21v17.228Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgMapOutlined.propTypes = propTypes;
SvgMapOutlined.defaultProps = defaultProps;
export default SvgMapOutlined;
