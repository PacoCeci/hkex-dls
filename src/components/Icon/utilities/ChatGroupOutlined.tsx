import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChatGroupOutlined(props: ISvgProps) {
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
            d="M7.333 3.198A4.333 4.333 0 0 0 3 7.531v10a4.334 4.334 0 0 0 4 4.321v2.346a1 1 0 0 0 1.64.768l3.722-3.101a.638.638 0 0 0 .638-.638v-.581a.781.781 0 0 0-.781-.781H12a1 1 0 0 0-.64.231L9 22.063v-1.198a1 1 0 0 0-1-1h-.667A2.333 2.333 0 0 1 5 17.53v-10a2.333 2.333 0 0 1 2.333-2.333h13.334A2.333 2.333 0 0 1 23 7.531v4.648c0 .563.456 1.019 1.019 1.019.542 0 .981-.44.981-.981V7.53a4.333 4.333 0 0 0-4.333-4.333H7.333Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15 24.198a3 3 0 0 0 3 3h4.15l2.225 1.78a1 1 0 0 0 1.625-.78v-1a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v6Zm8.125 1.22.878.702a1 1 0 0 1 .997-.922h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4.5a1 1 0 0 1 .625.22Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChatGroupOutlined.propTypes = propTypes;
SvgChatGroupOutlined.defaultProps = defaultProps;
export default SvgChatGroupOutlined;
