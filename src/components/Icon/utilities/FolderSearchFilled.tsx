import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFolderSearchFilled(props: ISvgProps) {
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
            d="M3 6.198a3 3 0 0 1 3-3h4.77a1 1 0 0 1 .77.364l2.24 2.713H24a3 3 0 0 1 3 3v6.631a8 8 0 0 0-13.938 6.292H6a3 3 0 0 1-3-3v-13Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M25.89 24.675a6 6 0 1 0-1.414 1.414l2.817 2.816a1 1 0 1 0 1.414-1.414l-2.816-2.816Zm-4.89.523a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgFolderSearchFilled.propTypes = propTypes;
SvgFolderSearchFilled.defaultProps = defaultProps;
export default SvgFolderSearchFilled;
