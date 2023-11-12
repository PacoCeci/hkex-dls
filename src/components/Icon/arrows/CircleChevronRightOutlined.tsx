import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleChevronRightOutlined(props: ISvgProps) {
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
            d="M4 16.198c0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12s-12 5.373-12 12Zm-2 0c0 7.732 6.268 14 14 14s14-6.268 14-14-6.268-14-14-14-14 6.268-14 14Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.793 20.905a1 1 0 0 1 0-1.414l3.293-3.293-3.293-3.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleChevronRightOutlined.propTypes = propTypes;
SvgCircleChevronRightOutlined.defaultProps = defaultProps;
export default SvgCircleChevronRightOutlined;
