import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCircleFishballMenuVerticalOutlined(props: ISvgProps) {
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
            d="M28 16c0-6.628-5.373-12-12-12S4 9.372 4 16c0 6.627 5.373 12 12 12s12-5.373 12-12Zm2 0c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14 14-6.268 14-14Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M16 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16 20a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCircleFishballMenuVerticalOutlined.propTypes = propTypes;
SvgCircleFishballMenuVerticalOutlined.defaultProps = defaultProps;
export default SvgCircleFishballMenuVerticalOutlined;
