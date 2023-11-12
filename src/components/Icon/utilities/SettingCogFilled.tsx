import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSettingCogFilled(props: ISvgProps) {
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
            d="M15.462 2.198h1.076c1.19 0 2.154.964 2.154 2.154V5.77c.987.255 1.92.646 2.776 1.153l1.005-1.005a2.154 2.154 0 0 1 3.046 0l.761.761a2.154 2.154 0 0 1 0 3.046l-1.005 1.005a10.71 10.71 0 0 1 1.154 2.776h1.417c1.19 0 2.154.964 2.154 2.154v1.077c0 1.19-.964 2.153-2.154 2.153h-1.418a10.703 10.703 0 0 1-1.153 2.776l1.005 1.005a2.154 2.154 0 0 1 0 3.046l-.761.761a2.154 2.154 0 0 1-3.046 0l-1.005-1.005c-.857.507-1.79.899-2.776 1.154v1.417c0 1.19-.964 2.154-2.154 2.154h-1.077a2.154 2.154 0 0 1-2.153-2.154v-1.417a10.71 10.71 0 0 1-2.776-1.154l-1.005 1.005a2.154 2.154 0 0 1-3.046 0l-.761-.761a2.154 2.154 0 0 1 0-3.046l1.005-1.005A10.706 10.706 0 0 1 5.57 18.89H4.154A2.154 2.154 0 0 1 2 16.737V15.66c0-1.19.964-2.154 2.154-2.154H5.57c.255-.987.647-1.92 1.154-2.776L5.72 9.725a2.154 2.154 0 0 1 0-3.046l.761-.761a2.154 2.154 0 0 1 3.046 0l1.005 1.005a10.709 10.709 0 0 1 2.776-1.153V4.352c0-1.19.964-2.154 2.153-2.154Zm-5.462 14c0-3.308 2.691-6 6-6s6 2.692 6 6-2.692 6-6 6-6-2.691-6-6Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSettingCogFilled.propTypes = propTypes;
SvgSettingCogFilled.defaultProps = defaultProps;
export default SvgSettingCogFilled;
