import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCameraSwapOutlined(props: ISvgProps) {
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
            d="M16 7.698c-2.207 0-4 1.794-4 4 0 2.207 1.794 4 4 4s4-1.794 4-4-1.793-4-4-4Zm-2 4c0-1.102.898-2 2-2 1.102 0 2 .898 2 2 0 1.102-.898 2-2 2-1.102 0-2-.898-2-2Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14 3.198a1 1 0 0 0-.707.293l-1.707 1.707H9a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2.586l-1.707-1.707A1 1 0 0 0 18 3.198h-4Zm-1.293 3.707 1.707-1.707h3.172l1.707 1.707a1 1 0 0 0 .707.293h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 0 .707-.293Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9.81 28.802a1 1 0 0 1 .197-1.4l1.38-1.04c-1.9-.303-3.606-.806-4.974-1.511C4.47 23.848 3 22.309 3 20.198c0-.452.07-.888.204-1.306a1 1 0 0 1 1.904.612 2.25 2.25 0 0 0-.108.694c0 1.03.692 2.03 2.33 2.875 1.16.599 2.692 1.055 4.479 1.331l-1.163-1.543a1 1 0 1 1 1.597-1.204l2.553 3.389a1 1 0 0 1-.197 1.4l-3.388 2.553a1 1 0 0 1-1.4-.197ZM28.797 18.892a1 1 0 0 0-1.905.612c.07.22.108.45.108.694 0 .97-.611 1.91-2.052 2.725-1.438.814-3.537 1.393-6.048 1.645a1 1 0 1 0 .2 1.99c2.665-.268 5.066-.894 6.833-1.895C27.7 23.664 29 22.18 29 20.198c0-.452-.07-.888-.203-1.306Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCameraSwapOutlined.propTypes = propTypes;
SvgCameraSwapOutlined.defaultProps = defaultProps;
export default SvgCameraSwapOutlined;
