import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgScriptOutlined(props: ISvgProps) {
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
            d="M13 4.198a3 3 0 0 0-3 3v16a1 1 0 1 1-2 0v-16a5 5 0 0 1 5-5h12.5a1 1 0 1 1 0 2H13Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M22 8.198a1 1 0 0 1 1 1v16a5 5 0 0 1-5 5 1 1 0 1 1 0-2 3 3 0 0 0 3-3v-16a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.586 22.784A2 2 0 0 1 4 22.198h9a2 2 0 0 1 2 2v1a3 3 0 0 0 3 3 1 1 0 1 1 0 2H7a5 5 0 0 1-5-5v-1a2 2 0 0 1 .586-1.414ZM14 28.198a5 5 0 0 1-1-3v-1H4v1a3 3 0 0 0 3 3h7ZM25.5 4.198a2.5 2.5 0 0 0-2.5 2.5v1.5h5v-1.5a2.5 2.5 0 0 0-2.5-2.5Zm-3.182-.682A4.5 4.5 0 0 1 30 6.698v1.5a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-2.5a4.5 4.5 0 0 1 1.318-3.182ZM13 10.198a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM13 16.198a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgScriptOutlined.propTypes = propTypes;
SvgScriptOutlined.defaultProps = defaultProps;
export default SvgScriptOutlined;
