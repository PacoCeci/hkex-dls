import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgMapFilled(props: ISvgProps) {
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
            d="m21.67 25.58 6.573 2.466A1.3 1.3 0 0 0 30 26.828V8.105a1.3 1.3 0 0 0-.843-1.217L21.67 4.081v21.5ZM19.67 4.078l-7.34 2.753v21.5l7.34-2.753v-21.5ZM3.756 4.363l6.574 2.465V28.31l-7.506-2.957A1.3 1.3 0 0 1 2 24.142V5.58a1.3 1.3 0 0 1 1.756-1.217Z"
          />
        </svg>
      }
    </span>
  );
}
SvgMapFilled.propTypes = propTypes;
SvgMapFilled.defaultProps = defaultProps;
export default SvgMapFilled;
