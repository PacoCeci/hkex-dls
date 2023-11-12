import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHierarchyFilled(props: ISvgProps) {
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
            d="M12 7.198a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM2 25.198a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM12 25.198a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM22 25.198a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 17.198a1 1 0 0 0-1 1v4a1 1 0 1 1-2 0v-4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0v-4a1 1 0 0 0-1-1H8Z"
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
SvgHierarchyFilled.propTypes = propTypes;
SvgHierarchyFilled.defaultProps = defaultProps;
export default SvgHierarchyFilled;
