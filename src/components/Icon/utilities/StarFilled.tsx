import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgStarFilled(props: ISvgProps) {
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
            d="M14.293 4.807A1.872 1.872 0 0 1 16 3.698a1.87 1.87 0 0 1 1.717 1.14v.002l2.71 6.357 6.866.612h.003a1.87 1.87 0 0 1 1.614 1.289 1.924 1.924 0 0 1-.541 1.993l-5.197 4.569 1.529 6.755a1.878 1.878 0 0 1-.734 1.935l-.009.007a1.887 1.887 0 0 1-1.077.341c-.359 0-.683-.11-.94-.258l-.015-.01L16 24.878l-5.936 3.558a1.871 1.871 0 0 1-2.766-2.03l1.52-6.702-5.194-4.628c-.558-.5-.76-1.28-.535-1.978l.006-.017a1.867 1.867 0 0 1 1.608-1.272h.003l6.865-.612 2.712-6.37.009-.02Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgStarFilled.propTypes = propTypes;
SvgStarFilled.defaultProps = defaultProps;
export default SvgStarFilled;
