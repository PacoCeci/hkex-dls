import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSettingSliderHorizontalSquareFilled(props: ISvgProps) {
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
            d="M17 20.198a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM14 13.198a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6 3.198a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-20a3 3 0 0 0-3-3H6Zm3 16h6.17a3.001 3.001 0 0 1 5.66 0H23a1 1 0 1 1 0 2h-2.17a3.001 3.001 0 0 1-5.66 0H9a1 1 0 1 1 0-2Zm2.17-8H9a1 1 0 1 0 0 2h2.17a3.001 3.001 0 0 0 5.66 0H23a1 1 0 1 0 0-2h-6.17a3.001 3.001 0 0 0-5.66 0Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSettingSliderHorizontalSquareFilled.propTypes = propTypes;
SvgSettingSliderHorizontalSquareFilled.defaultProps = defaultProps;
export default SvgSettingSliderHorizontalSquareFilled;
