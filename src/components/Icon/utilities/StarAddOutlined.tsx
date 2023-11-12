import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgStarAddOutlined(props: ISvgProps) {
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
            d="M14.293 4.807A1.872 1.872 0 0 1 16 3.698a1.87 1.87 0 0 1 1.717 1.14v.002l2.71 6.357 6.866.612h.003a1.87 1.87 0 0 1 1.614 1.289 1.924 1.924 0 0 1-.541 1.993l-2.71 2.382a1 1 0 1 1-1.32-1.502l2.497-2.195-7.182-.64a1 1 0 0 1-.831-.604l-2.825-6.626-2.821 6.625a1 1 0 0 1-.832.605l-7.174.64 5.419 4.827a1 1 0 0 1 .31.968l-1.584 6.982 4.169-2.5a1 1 0 1 1 1.028 1.716l-4.449 2.667a1.871 1.871 0 0 1-2.766-2.03l1.52-6.702-5.194-4.628c-.558-.5-.76-1.28-.535-1.978l.006-.017a1.867 1.867 0 0 1 1.608-1.272h.003l6.865-.612 2.712-6.37.009-.02Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M22 18.698a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M27 23.698a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgStarAddOutlined.propTypes = propTypes;
SvgStarAddOutlined.defaultProps = defaultProps;
export default SvgStarAddOutlined;
