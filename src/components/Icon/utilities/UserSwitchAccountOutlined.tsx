import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserSwitchAccountOutlined(props: ISvgProps) {
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
            d="M18.231 6.721c0-2.498 2.052-4.523 4.583-4.523 2.532 0 4.584 2.025 4.584 4.523 0 1.363-.61 2.583-1.574 3.412 2.301 1.045 3.949 3.252 4.172 5.86a1.004 1.004 0 0 1-.924 1.08 1.01 1.01 0 0 1-1.095-.912c-.224-2.619-2.451-4.676-5.164-4.676-2.712 0-4.94 2.057-5.163 4.677a1.01 1.01 0 0 1-1.095.912 1.004 1.004 0 0 1-.925-1.08c.223-2.61 1.872-4.817 4.174-5.862a4.488 4.488 0 0 1-1.573-3.41Zm4.583-2.523c-1.412 0-2.556 1.13-2.556 2.523 0 1.394 1.145 2.524 2.557 2.524.358 0 .698-.073 1.005-.202a2.524 2.524 0 0 0 1.552-2.322c0-1.393-1.145-2.523-2.558-2.523Zm-15.49 3.39c0-2.448 2.01-4.431 4.49-4.431h2.756c.56 0 1.013.447 1.013 1 0 .552-.453 1-1.013 1h-2.756c-1.36 0-2.463 1.088-2.463 2.43v2.61l1.062-.761a1.022 1.022 0 0 1 1.415.222.991.991 0 0 1-.225 1.396l-2.656 1.902c-.05.036-.102.066-.156.092a1.02 1.02 0 0 1-1.176-.193l-2.515-1.8a.991.991 0 0 1-.225-1.397 1.022 1.022 0 0 1 1.415-.222l1.034.74V7.587ZM4.682 19.6c0-2.498 2.052-4.523 4.583-4.523 2.532 0 4.584 2.025 4.584 4.523a4.495 4.495 0 0 1-1.795 3.59c2.376 1.018 4.088 3.262 4.316 5.924a1.004 1.004 0 0 1-.925 1.08 1.01 1.01 0 0 1-1.094-.912c-.225-2.62-2.452-4.677-5.164-4.677-2.713 0-4.94 2.058-5.164 4.677a1.01 1.01 0 0 1-1.095.912 1.004 1.004 0 0 1-.924-1.08c.23-2.7 1.988-4.97 4.417-5.966a4.494 4.494 0 0 1-1.74-3.548Zm5.589 2.322a2.524 2.524 0 0 0 1.551-2.322c0-1.393-1.144-2.523-2.557-2.523-1.412 0-2.557 1.13-2.557 2.523 0 1.394 1.145 2.524 2.557 2.524.359 0 .698-.073 1.006-.202Zm15.056.18v2.608c0 1.343-1.103 2.431-2.463 2.431h-2.757c-.56 0-1.013.448-1.013 1 0 .553.454 1 1.013 1h2.757c2.48 0 4.49-1.983 4.49-4.43v-2.59l1.034.741a1.022 1.022 0 0 0 1.415-.222.992.992 0 0 0-.225-1.397l-2.516-1.8a1.017 1.017 0 0 0-1.191-.185 1.006 1.006 0 0 0-.14.084l-2.656 1.901a.992.992 0 0 0-.226 1.397c.329.447.963.547 1.416.222l1.062-.76Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserSwitchAccountOutlined.propTypes = propTypes;
SvgUserSwitchAccountOutlined.defaultProps = defaultProps;
export default SvgUserSwitchAccountOutlined;