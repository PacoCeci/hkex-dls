import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgWifiOffOutlined(props: ISvgProps) {
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
            d="M26.292 4.491a1 1 0 1 1 1.414 1.414L25.732 7.88l-1.464 1.464-2.6 2.6-1.525 1.525-2.837 2.836-1.924 1.924-9.676 9.676a1 1 0 1 1-1.414-1.414l6.226-6.226a1 1 0 0 1-.3-1.599 7.987 7.987 0 0 1 4.214-2.315l3.492-3.492c-.627-.106-1.27-.16-1.928-.16a11.46 11.46 0 0 0-8.305 3.547 1 1 0 1 1-1.445-1.383 13.46 13.46 0 0 1 9.75-4.165c1.248 0 2.456.17 3.602.486l2.757-2.756a16.945 16.945 0 0 0-6.359-1.23 16.942 16.942 0 0 0-12.278 5.245 1 1 0 1 1-1.444-1.383 18.942 18.942 0 0 1 13.722-5.862c2.811 0 5.48.611 7.881 1.708l2.415-2.415Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18.999 24.198a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-2 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m25.992 10.448 1.43-1.43c.82.618 1.588 1.301 2.296 2.042a1 1 0 1 1-1.444 1.383 17.1 17.1 0 0 0-2.282-1.995ZM23.479 12.961l-1.447 1.447a11.558 11.558 0 0 1 2.27 1.838 1 1 0 1 0 1.444-1.383 13.556 13.556 0 0 0-2.267-1.902ZM19.456 16.984l-1.53 1.53a5.998 5.998 0 0 1 2.403 1.535 1 1 0 0 0 1.445-1.383 8.02 8.02 0 0 0-2.318-1.682Z"
          />
        </svg>
      }
    </span>
  );
}
SvgWifiOffOutlined.propTypes = propTypes;
SvgWifiOffOutlined.defaultProps = defaultProps;
export default SvgWifiOffOutlined;
