import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSettingSliderHorizontalSquareOutlined(props: ISvgProps) {
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
            d="M9 19.198h6.17a3.001 3.001 0 0 1 5.66 0H23a1 1 0 1 1 0 2h-2.17a3.001 3.001 0 0 1-5.66 0H9a1 1 0 1 1 0-2Zm8 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11.17 11.198H9a1 1 0 1 0 0 2h2.17a3.001 3.001 0 0 0 5.66 0H23a1 1 0 1 0 0-2h-6.17a3.001 3.001 0 0 0-5.66 0Zm2.83 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 6.198a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-20Zm3-1a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1H6Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSettingSliderHorizontalSquareOutlined.propTypes = propTypes;
SvgSettingSliderHorizontalSquareOutlined.defaultProps = defaultProps;
export default SvgSettingSliderHorizontalSquareOutlined;
