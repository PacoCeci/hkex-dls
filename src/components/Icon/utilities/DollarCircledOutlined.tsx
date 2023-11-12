import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDollarCircledOutlined(props: ISvgProps) {
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
            d="M17 9.198v1.1c1.599.333 2.624 1.457 2.965 2.723a1 1 0 0 1-1.93.52c-.176-.652-.779-1.343-2.035-1.343-.71 0-1.235.174-1.554.407-.289.21-.446.489-.446.885 0 .235.052.492.285.76.25.286.791.677 1.965.98 1.41.364 2.368.91 2.972 1.602.622.713.778 1.476.778 2.075 0 1.062-.486 1.93-1.268 2.5-.498.363-1.094.593-1.732.706v1.085a1 1 0 1 1-2 0v-1.1c-1.599-.333-2.625-1.456-2.966-2.723a1 1 0 0 1 1.931-.52c.176.652.778 1.343 2.035 1.343.71 0 1.234-.174 1.553-.407.29-.21.447-.489.447-.884 0-.236-.052-.493-.285-.76-.25-.287-.792-.678-1.965-.98-1.41-.365-2.369-.911-2.972-1.603A3.086 3.086 0 0 1 12 13.49c0-1.063.485-1.93 1.268-2.5.498-.364 1.094-.593 1.732-.707V9.198a1 1 0 1 1 2 0Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M30 16.198c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14Zm-2 0c0 6.628-5.373 12-12 12s-12-5.372-12-12c0-6.627 5.373-12 12-12s12 5.373 12 12Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgDollarCircledOutlined.propTypes = propTypes;
SvgDollarCircledOutlined.defaultProps = defaultProps;
export default SvgDollarCircledOutlined;
