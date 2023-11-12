import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFolderOutlined(props: ISvgProps) {
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
            d="M5 7.198a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V11.835a1 1 0 0 0-1-1H14a1 1 0 0 1-.771-.364l-2.7-3.273H5Zm-3 1a3 3 0 0 1 3-3h6a1 1 0 0 1 .771.364l2.7 3.272H27a3 3 0 0 1 3 3v12.364a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-16Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgFolderOutlined.propTypes = propTypes;
SvgFolderOutlined.defaultProps = defaultProps;
export default SvgFolderOutlined;
