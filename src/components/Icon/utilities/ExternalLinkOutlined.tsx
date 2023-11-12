import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgExternalLinkOutlined(props: ISvgProps) {
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
            d="M7 8.198a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-9a1 1 0 1 1 2 0v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-15a4 4 0 0 1 4-4h9a1 1 0 1 1 0 2H7ZM21 3.198h7a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-6h-6a1 1 0 1 1 0-2Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m28.207 5.405-11.5 11.5a1 1 0 1 1-1.414-1.414l11.5-11.5 1.414 1.414Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgExternalLinkOutlined.propTypes = propTypes;
SvgExternalLinkOutlined.defaultProps = defaultProps;
export default SvgExternalLinkOutlined;
