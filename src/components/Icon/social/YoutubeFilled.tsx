import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgYoutubeFilled(props: ISvgProps) {
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
            d="M28.51 7.837c.434.437.746.98.904 1.576.586 2.199.586 6.784.586 6.784s0 4.585-.585 6.783a3.519 3.519 0 0 1-2.476 2.492C24.75 26.06 16 26.06 16 26.06s-8.75 0-10.94-.588a3.52 3.52 0 0 1-2.475-2.492C2 20.782 2 16.197 2 16.197s0-4.585.585-6.784a3.52 3.52 0 0 1 2.476-2.491C7.25 6.333 16 6.333 16 6.333s8.75 0 10.94.589a3.52 3.52 0 0 1 1.57.915Zm-8.055 8.36-7.318-4.164v8.327l7.318-4.163Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgYoutubeFilled.propTypes = propTypes;
SvgYoutubeFilled.defaultProps = defaultProps;
export default SvgYoutubeFilled;
