import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFolderSearchOutlined(props: ISvgProps) {
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
            d="M5 6.198a1 1 0 0 1 1-1h4.298l2.238 2.713a1 1 0 0 0 .772.364H24a1 1 0 0 1 1 1v4.442c0 .341.186.654.469.844.59.399 1.531.013 1.531-.7V9.275a3 3 0 0 0-3-3H13.78l-2.24-2.713a1 1 0 0 0-.77-.364H6a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h6.06c.532 0 .94-.468.94-1s-.408-1-.94-1H6a1 1 0 0 1-1-1v-13Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M25.89 24.675a6 6 0 1 0-1.414 1.414l2.817 2.816a1 1 0 0 0 1.414-1.414l-2.816-2.817Zm-4.89.523a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgFolderSearchOutlined.propTypes = propTypes;
SvgFolderSearchOutlined.defaultProps = defaultProps;
export default SvgFolderSearchOutlined;
