import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgVolumeFullFilled(props: ISvgProps) {
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
            d="M16.447 5.304a1 1 0 0 1 .553.894v20a1 1 0 0 1-1.6.8l-7.733-5.8H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4.667l7.733-5.8a1 1 0 0 1 1.047-.094ZM24.485 6.299a1 1 0 0 1 1.415 0c5.467 5.467 5.467 14.331 0 19.799a1 1 0 0 1-1.415-1.415c4.687-4.686 4.687-12.284 0-16.97a1 1 0 0 1 0-1.414Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M20.243 10.541a1 1 0 0 1 1.414 0 8 8 0 0 1 0 11.314 1 1 0 0 1-1.414-1.414 6 6 0 0 0 0-8.485 1 1 0 0 1 0-1.415Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgVolumeFullFilled.propTypes = propTypes;
SvgVolumeFullFilled.defaultProps = defaultProps;
export default SvgVolumeFullFilled;
