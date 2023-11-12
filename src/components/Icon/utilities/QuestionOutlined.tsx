import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgQuestionOutlined(props: ISvgProps) {
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
            d="M16 28.198c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12Zm0 2c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 11.198a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 1 1 5 3.874v1.126a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1 2 2 0 1 0 0-4Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.25 21.948a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
          />
        </svg>
      }
    </span>
  );
}
SvgQuestionOutlined.propTypes = propTypes;
SvgQuestionOutlined.defaultProps = defaultProps;
export default SvgQuestionOutlined;
