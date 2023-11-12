import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCashFlowOutlined(props: ISvgProps) {
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
            d="M6.631 8.698c2.2-2.745 5.58-4.5 9.369-4.5 5.998 0 10.97 4.403 11.858 10.153a1 1 0 0 0 1.977-.306C28.799 7.336 23 2.199 16 2.199a13.976 13.976 0 0 0-11 5.34v-2.34a1 1 0 1 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 1 0 0-2H6.63ZM4.14 18.046a1 1 0 0 0-1.976.305C3.2 25.06 9 30.198 16 30.198c4.462 0 8.437-2.089 11-5.339v2.34a1 1 0 1 0 2 0v-4.5a1 1 0 0 0-1-1h-4.5a1 1 0 1 0 0 2h1.868c-2.2 2.744-5.58 4.5-9.368 4.5-6 0-10.971-4.403-11.86-10.154Z"
          />
          <path
            fill="currentColor"
            d="M17 9.198a1 1 0 0 0-2 0v1.085c-.638.114-1.234.343-1.733.706A3.018 3.018 0 0 0 12 13.49c0 .599.156 1.362.778 2.075.604.692 1.562 1.238 2.972 1.602 1.174.303 1.715.694 1.966.981.232.267.284.524.284.76 0 .395-.157.674-.446.884-.32.233-.844.407-1.554.407-1.256 0-1.859-.69-2.034-1.343a1 1 0 0 0-1.931.52c.34 1.267 1.367 2.39 2.965 2.723v1.1a1 1 0 1 0 2 0v-1.085c.638-.113 1.234-.343 1.732-.706a3.019 3.019 0 0 0 1.268-2.5c0-.599-.156-1.362-.777-2.075-.604-.692-1.563-1.238-2.973-1.602-1.173-.303-1.714-.694-1.965-.98a1.089 1.089 0 0 1-.285-.76c0-.396.158-.674.447-.885.319-.233.844-.407 1.553-.407 1.257 0 1.86.691 2.035 1.343a1 1 0 0 0 1.93-.52c-.34-1.267-1.366-2.39-2.965-2.723v-1.1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgCashFlowOutlined.propTypes = propTypes;
SvgCashFlowOutlined.defaultProps = defaultProps;
export default SvgCashFlowOutlined;