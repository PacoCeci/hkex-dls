import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCashFileOutlined(props: ISvgProps) {
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
            d="M10 26.198a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H10ZM9 21.198a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1ZM13.308 7.198a1 1 0 0 0-2 0v.261a3.342 3.342 0 0 0-1.238.546A2.552 2.552 0 0 0 9 10.115c0 .502.132 1.147.655 1.747.505.579 1.29 1.017 2.403 1.304.875.226 1.243.509 1.395.683a.607.607 0 0 1 .162.432.557.557 0 0 1-.248.494c-.196.143-.548.27-1.06.27-.86 0-1.233-.461-1.342-.863a1 1 0 0 0-1.93.52c.27 1.008 1.062 1.899 2.272 2.217v.279a1 1 0 1 0 2 0v-.262a3.342 3.342 0 0 0 1.238-.545 2.552 2.552 0 0 0 1.07-2.11c0-.502-.132-1.147-.655-1.747-.505-.579-1.29-1.017-2.403-1.304-.875-.226-1.243-.509-1.395-.683a.608.608 0 0 1-.162-.432c0-.228.083-.374.248-.494.196-.143.548-.27 1.06-.27.86 0 1.233.461 1.342.863a1 1 0 1 0 1.93-.52c-.27-1.008-1.062-1.899-2.273-2.217v-.279Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 5.198a3 3 0 0 1 3-3h10.672a3 3 0 0 1 2.12.879l5.33 5.328A3 3 0 0 1 27 10.526v16.672a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-22Zm3-1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-16h-6a1 1 0 0 1-1-1v-6H8Zm12 .914 4.086 4.086H20V5.112Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCashFileOutlined.propTypes = propTypes;
SvgCashFileOutlined.defaultProps = defaultProps;
export default SvgCashFileOutlined;
