import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSquareAddOutlined(props: ISvgProps) {
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
            d="M25 5.198H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-18a2 2 0 0 0-2-2Zm-18-2a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4v-18a4 4 0 0 0-4-4H7Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M23 16.198a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 9.198a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0v-12a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSquareAddOutlined.propTypes = propTypes;
SvgSquareAddOutlined.defaultProps = defaultProps;
export default SvgSquareAddOutlined;
