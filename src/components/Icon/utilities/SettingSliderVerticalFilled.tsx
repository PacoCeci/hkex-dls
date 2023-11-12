import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSettingSliderVerticalFilled(props: ISvgProps) {
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
            d="M12 8.198a4.002 4.002 0 0 1-3 3.874v15.126a1 1 0 1 1-2 0V12.072a4.002 4.002 0 0 1 1-7.874 4 4 0 0 1 4 4ZM17 20.072a4.002 4.002 0 0 0 0-7.748V5.198a1 1 0 1 0-2 0v7.126a4.002 4.002 0 0 0 0 7.748v7.126a1 1 0 1 0 2 0v-7.126ZM28 24.198a4 4 0 1 1-5-3.874V5.198a1 1 0 1 1 2 0v15.126c1.725.444 3 2.01 3 3.874Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSettingSliderVerticalFilled.propTypes = propTypes;
SvgSettingSliderVerticalFilled.defaultProps = defaultProps;
export default SvgSettingSliderVerticalFilled;
