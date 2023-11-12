import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgChequeOutlined(props: ISvgProps) {
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
            d="M10.308 11.198a1 1 0 0 0-2 0v.262a3.342 3.342 0 0 0-1.238.545A2.553 2.553 0 0 0 6 14.115c0 .502.132 1.147.655 1.747.505.58 1.29 1.017 2.403 1.304.875.226 1.243.51 1.395.683a.608.608 0 0 1 .162.433.557.557 0 0 1-.248.494c-.196.142-.548.268-1.06.268-.86 0-1.233-.46-1.342-.862a1 1 0 0 0-1.93.52c.27 1.008 1.062 1.899 2.272 2.217v.28a1 1 0 1 0 2 0v-.262a3.34 3.34 0 0 0 1.238-.546 2.552 2.552 0 0 0 1.07-2.11c0-.502-.132-1.147-.655-1.747-.505-.579-1.29-1.017-2.403-1.304-.875-.226-1.243-.509-1.395-.683A.608.608 0 0 1 8 14.115c0-.228.083-.374.248-.494.196-.143.548-.269 1.06-.269.86 0 1.233.46 1.342.862a1 1 0 1 0 1.93-.52c-.27-1.008-1.062-1.898-2.273-2.217v-.279ZM14 21.198a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM18 16.198a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M27 26.198a3 3 0 0 0 3-3v-9.171a3 3 0 0 0-.879-2.122l-4.828-4.828a3 3 0 0 0-2.121-.879H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h22Zm1-3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h17v5a1 1 0 0 0 1 1h5v9Zm-4-11V9.612l2.586 2.586H24Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgChequeOutlined.propTypes = propTypes;
SvgChequeOutlined.defaultProps = defaultProps;
export default SvgChequeOutlined;
