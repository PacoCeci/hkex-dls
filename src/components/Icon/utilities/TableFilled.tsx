import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgTableFilled(props: ISvgProps) {
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
            d="M3 6.198a3 3 0 0 1 3-3h9v12H3v-9ZM15 17.198H3v9a3 3 0 0 0 3 3h9v-12ZM17 29.198h9a3 3 0 0 0 3-3v-9H17v12ZM17 15.198v-12h9a3 3 0 0 1 3 3v9H17Z"
          />
        </svg>
      }
    </span>
  );
}
SvgTableFilled.propTypes = propTypes;
SvgTableFilled.defaultProps = defaultProps;
export default SvgTableFilled;
