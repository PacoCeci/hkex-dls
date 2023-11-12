import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPhoneOffFilled(props: ISvgProps) {
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
            d="M14.557 16.227a15.615 15.615 0 0 1-2.596-4.008l1.622-1.082a2 2 0 0 0 .73-2.452L12.48 4.41a2 2 0 0 0-1.838-1.212H4.94c-1.105 0-2.008.898-1.936 2 .431 6.628 3.006 11.795 6.759 15.823l-5.47 5.47a1 1 0 1 0 1.414 1.414l22-22a1 1 0 0 0-1.414-1.414L14.557 16.227Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.559 18.882c.77.528 1.58.984 2.42 1.355l1.082-1.622a2 2 0 0 1 2.452-.73l4.275 1.833A2 2 0 0 1 29 21.556v5.702c0 1.105-.898 2.008-2 1.936-5.824-.379-10.52-2.413-14.307-5.446l4.865-4.866Z"
          />
        </svg>
      }
    </span>
  );
}
SvgPhoneOffFilled.propTypes = propTypes;
SvgPhoneOffFilled.defaultProps = defaultProps;
export default SvgPhoneOffFilled;
