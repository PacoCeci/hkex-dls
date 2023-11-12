import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgPhoneOffOutlined(props: ISvgProps) {
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
            d="M14.557 16.227a15.615 15.615 0 0 1-2.596-4.008l1.622-1.082a2 2 0 0 0 .73-2.452L12.48 4.41a2 2 0 0 0-1.838-1.212H4.94c-1.105 0-2.008.898-1.936 2 .431 6.628 3.006 11.795 6.759 15.823l-5.47 5.47a1 1 0 1 0 1.414 1.414l22-22a1 1 0 0 0-1.414-1.414L14.557 16.227Zm-4.425-3.199a2 2 0 0 1 .72-2.473l1.622-1.082-1.832-4.275H5.009c.421 6.039 2.755 10.724 6.169 14.408l1.962-1.962a17.634 17.634 0 0 1-3.008-4.616Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m12.694 23.747 1.423-1.423c3.43 2.697 7.648 4.5 12.883 4.865v-5.633l-4.275-1.832-1.082 1.623a2 2 0 0 1-2.473.72 17.185 17.185 0 0 1-3.047-1.749l1.436-1.436c.77.528 1.58.984 2.42 1.355l1.082-1.622a2 2 0 0 1 2.452-.73l4.275 1.833A2 2 0 0 1 29 21.556v5.702c0 1.105-.898 2.008-2 1.936-5.824-.379-10.52-2.413-14.306-5.447Z"
          />
        </svg>
      }
    </span>
  );
}
SvgPhoneOffOutlined.propTypes = propTypes;
SvgPhoneOffOutlined.defaultProps = defaultProps;
export default SvgPhoneOffOutlined;
