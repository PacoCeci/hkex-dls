import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgImageLibraryOutlined(props: ISvgProps) {
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
            d="M15 14.198a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 7.198a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-12Zm3-1h16a1 1 0 0 1 1 1v6.245l-3.039-2.961a1 1 0 0 0-1.396 0l-9.971 9.716H11a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Zm5.46 14H27a1 1 0 0 0 1-1v-2.963l-3.737-3.64-7.804 7.603Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M4 11.198a1 1 0 0 1 1-1h1v-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-1h-2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-14Z"
          />
        </svg>
      }
    </span>
  );
}
SvgImageLibraryOutlined.propTypes = propTypes;
SvgImageLibraryOutlined.defaultProps = defaultProps;
export default SvgImageLibraryOutlined;
