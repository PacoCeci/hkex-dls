import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgEarthFilled(props: ISvgProps) {
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
            d="M16 4C9.373 4 4 9.372 4 16c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12ZM2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18 2.14a1 1 0 0 1 1 1V7.5a4.5 4.5 0 0 1-4.5 4.5 2.5 2.5 0 0 0-2.5 2.5v3A4.5 4.5 0 0 1 7.5 22H4a1 1 0 1 1 0-2l-1-1.5c.663 0-.469-1.031 0-1.5.469-.469 0-.837 0-1.5L4 11c0-1.194 2.156-3.656 3-4.5.844-.844 2.307-2 3.5-2 .663 0 1.531-.531 2-1 .469-.469 1.732-.105 1.732-.768L17 3.14a1 1 0 0 1 1-1ZM18.318 15.318A4.5 4.5 0 0 1 21.5 14h4.265a8.12 8.12 0 0 1 3.696.912 1 1 0 1 1-.922 1.775c-.86-.446.93 1.819-.039 1.813l-.5 1.768c-.663 0-.031.263-.5.732s-.5.837-.5 1.5-.969.47-.5.94c.469.468-1.398.56-.735.56.929 0-.921-.157-.265.5.656.656-.5-.928-.5 0v1.74a1 1 0 1 1-2 0V24.5a1.5 1.5 0 0 0-1.5-1.5 4.5 4.5 0 0 1-3.182-7.682Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgEarthFilled.propTypes = propTypes;
SvgEarthFilled.defaultProps = defaultProps;
export default SvgEarthFilled;
