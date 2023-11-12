import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleChevronDownOutlined(props: ISvgProps) {
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
            d="M16 4.198c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12Zm0-2c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.293 13.991a1 1 0 0 1 1.414 0L16 17.284l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleChevronDownOutlined.propTypes = propTypes;
SvgCircleChevronDownOutlined.defaultProps = defaultProps;
export default SvgCircleChevronDownOutlined;
