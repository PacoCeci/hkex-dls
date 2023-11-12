import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDollarCircledFilled(props: ISvgProps) {
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
            d="M16 30.198c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Zm1-19.9v-1.1a1 1 0 1 0-2 0v1.085c-.637.114-1.233.343-1.732.706a3.018 3.018 0 0 0-1.268 2.5c0 .599.156 1.362.778 2.075.604.692 1.562 1.238 2.972 1.602 1.174.303 1.715.694 1.965.981.233.267.285.524.285.76 0 .395-.157.673-.446.884-.32.233-.844.407-1.554.407-1.256 0-1.858-.69-2.034-1.343a1 1 0 0 0-1.931.52c.34 1.267 1.367 2.39 2.966 2.723v1.1a1 1 0 1 0 2 0v-1.085c.637-.114 1.233-.343 1.731-.706a3.018 3.018 0 0 0 1.268-2.5c0-.599-.156-1.362-.777-2.075-.604-.692-1.563-1.238-2.973-1.602-1.173-.303-1.715-.694-1.965-.981a1.089 1.089 0 0 1-.285-.76c0-.395.158-.673.447-.884.319-.233.844-.407 1.553-.407 1.256 0 1.859.69 2.035 1.343a1 1 0 1 0 1.93-.52c-.34-1.267-1.366-2.39-2.965-2.723Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgDollarCircledFilled.propTypes = propTypes;
SvgDollarCircledFilled.defaultProps = defaultProps;
export default SvgDollarCircledFilled;
