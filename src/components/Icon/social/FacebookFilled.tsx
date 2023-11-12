import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgFacebookFilled(props: ISvgProps) {
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
            d="M18.625 7.448H23v-5.25h-4.375A6.087 6.087 0 0 0 12.5 8.323v2.625H9v5.25h3.5v14h5.25v-14h4.375l.875-5.25h-5.25V8.323c0-.437.438-.875.875-.875Z"
          />
        </svg>
      }
    </span>
  );
}
SvgFacebookFilled.propTypes = propTypes;
SvgFacebookFilled.defaultProps = defaultProps;
export default SvgFacebookFilled;
