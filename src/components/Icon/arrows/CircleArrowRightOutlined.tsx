import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleArrowRightOutlined(props: ISvgProps) {
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
            d="M16 30.198c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Zm0-2c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M16.293 20.491a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414l3.293 3.293H10a1 1 0 0 0 0 2h9.586l-3.293 3.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleArrowRightOutlined.propTypes = propTypes;
SvgCircleArrowRightOutlined.defaultProps = defaultProps;
export default SvgCircleArrowRightOutlined;
