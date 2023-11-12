import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleArrowLeftOutlined(props: ISvgProps) {
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
            d="M16 2.198c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14Zm0 2c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M15.707 11.905a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 1 0 1.414-1.414l-3.293-3.293H22a1 1 0 1 0 0-2h-9.586l3.293-3.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleArrowLeftOutlined.propTypes = propTypes;
SvgCircleArrowLeftOutlined.defaultProps = defaultProps;
export default SvgCircleArrowLeftOutlined;
