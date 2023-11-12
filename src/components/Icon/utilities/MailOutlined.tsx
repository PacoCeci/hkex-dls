import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMailOutlined(props: ISvgProps) {
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
            d="M2 9.198a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-14Zm3-1h22c.029 0 .058.001.086.004L16 15.024 4.914 8.202c.028-.003.057-.004.086-.004Zm-1 1.79v13.21a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V9.988L16.524 17.05a1 1 0 0 1-1.048 0L4 9.988Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgMailOutlined.propTypes = propTypes;
SvgMailOutlined.defaultProps = defaultProps;
export default SvgMailOutlined;
