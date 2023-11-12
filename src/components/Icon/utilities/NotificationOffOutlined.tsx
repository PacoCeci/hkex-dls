import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgNotificationOffOutlined(props: ISvgProps) {
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
            d="M16 2.198a1 1 0 0 1 1 1v2.055a8.98 8.98 0 0 1 5.65 2.88l3.643-3.642a1 1 0 1 1 1.414 1.414l-22 22a1 1 0 1 1-1.414-1.414l2.293-2.293H6a1 1 0 0 1-.71-1.704c.336-.338.607-.757.842-1.167.442-.774.868-1.853.868-3.129v-4c0-4.632 3.5-8.447 8-8.945V3.198a1 1 0 0 1 1-1Zm-7.414 20L21.234 9.55A7 7 0 0 0 9 14.198v4c0 1.654-.528 3.03-1.064 4h.65Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.243 24.198H26a1 1 0 0 0 .709-1.705c-.335-.338-.607-.756-.84-1.166-.443-.774-.869-1.853-.869-3.129v-4c0-.84-.115-1.654-.33-2.426l-1.707 1.705c.025.237.037.478.037.721v4c0 1.654.528 3.03 1.064 4h-9.821l-2 2ZM14 26.198a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2Z"
          />
        </svg>
      }
    </span>
  );
}
SvgNotificationOffOutlined.propTypes = propTypes;
SvgNotificationOffOutlined.defaultProps = defaultProps;
export default SvgNotificationOffOutlined;
