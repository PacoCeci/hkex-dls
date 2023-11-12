import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgStarOutlined(props: ISvgProps) {
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
            d="M14.293 4.807A1.872 1.872 0 0 1 16 3.698a1.87 1.87 0 0 1 1.717 1.14v.002l2.71 6.357 6.866.612h.003a1.87 1.87 0 0 1 1.614 1.289 1.924 1.924 0 0 1-.541 1.993l-5.197 4.569 1.529 6.755a1.878 1.878 0 0 1-.734 1.935l-.009.007a1.887 1.887 0 0 1-1.077.341c-.359 0-.683-.11-.94-.258l-.015-.01L16 24.878l-5.936 3.558a1.871 1.871 0 0 1-2.766-2.03l1.52-6.702-5.194-4.628c-.558-.5-.76-1.28-.535-1.978l.006-.017a1.867 1.867 0 0 1 1.608-1.272h.003l6.865-.612 2.712-6.37.009-.02Zm1.706 1.099 2.825 6.626a1 1 0 0 0 .83.604l7.183.64-5.43 4.774a1 1 0 0 0-.316.972l1.591 7.03-6.167-3.698a1 1 0 0 0-1.029 0l-6.17 3.699 1.585-6.982a1 1 0 0 0-.31-.968l-5.419-4.828 7.175-.64a1 1 0 0 0 .83-.604L16 5.906Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgStarOutlined.propTypes = propTypes;
SvgStarOutlined.defaultProps = defaultProps;
export default SvgStarOutlined;
