import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRepeatOutlined(props: ISvgProps) {
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
            d="M4 3.198a1 1 0 0 1 1 1v6.5h6.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1ZM27.996 29.198a1 1 0 0 1-1-1v-6.5h-6.5a1 1 0 1 1 0-2h7.5a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 5.198c-4.788 0-8.864 3.06-10.374 7.333l-1.886-.666C5.524 6.817 10.338 3.198 16 3.198c6.442 0 11.789 4.686 12.82 10.835a1 1 0 1 1-1.972.33C25.975 9.163 21.45 5.199 16 5.199ZM4 17.212a1 1 0 0 1 1.152.82c.873 5.202 5.398 9.166 10.848 9.166 4.788 0 8.864-3.06 10.374-7.333l1.886.666c-1.784 5.048-6.598 8.667-12.26 8.667-6.443 0-11.789-4.685-12.82-10.834A1 1 0 0 1 4 17.212Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgRepeatOutlined.propTypes = propTypes;
SvgRepeatOutlined.defaultProps = defaultProps;
export default SvgRepeatOutlined;
