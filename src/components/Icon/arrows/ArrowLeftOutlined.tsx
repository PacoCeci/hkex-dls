import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgArrowLeftOutlined(props: ISvgProps) {
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
            d="M12.707 8.905a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 1 0 1.414-1.414l-6.293-6.293H28a1 1 0 1 0 0-2H6.414l6.293-6.293Z"
          />
        </svg>
      }
    </span>
  );
}
SvgArrowLeftOutlined.propTypes = propTypes;
SvgArrowLeftOutlined.defaultProps = defaultProps;
export default SvgArrowLeftOutlined;
