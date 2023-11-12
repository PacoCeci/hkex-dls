import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCameraFilled(props: ISvgProps) {
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
            d="M12 17.198c0-2.205 1.795-4 4-4s4 1.796 4 4c0 2.204-1.796 4-4 4-2.204 0-4-1.795-4-4Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13 5.198a1 1 0 0 0-.707.293L9.586 8.198H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-4.586l-2.707-2.707A1 1 0 0 0 19 5.198h-6Zm3 6c-3.31 0-6 2.69-6 6s2.691 6 6 6 6-2.691 6-6-2.69-6-6-6Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCameraFilled.propTypes = propTypes;
SvgCameraFilled.defaultProps = defaultProps;
export default SvgCameraFilled;
