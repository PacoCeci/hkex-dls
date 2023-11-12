import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgWriteOutlined(props: ISvgProps) {
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
            d="M7 8.198a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-9a1 1 0 1 1 2 0v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-15a4 4 0 0 1 4-4h9a1 1 0 1 1 0 2H7Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M26.673 5.525a1.121 1.121 0 0 0-1.586 0l-8.184 8.184-.529 2.115 2.115-.529 8.184-8.184a1.121 1.121 0 0 0 0-1.586Zm-3-1.414a3.121 3.121 0 1 1 4.414 4.414l-8.38 8.38a1 1 0 0 1-.465.263l-4 1a1 1 0 0 1-1.212-1.213l1-4a.999.999 0 0 1 .263-.464l8.38-8.38Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgWriteOutlined.propTypes = propTypes;
SvgWriteOutlined.defaultProps = defaultProps;
export default SvgWriteOutlined;
