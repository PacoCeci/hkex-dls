import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgExcelFileOutlined(props: ISvgProps) {
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
            d="M11.629 22.27a1 1 0 0 1 1.3.556l2.4 6a1 1 0 0 1-1.857.744l-2.4-6a1 1 0 0 1 .557-1.3Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14.772 22.27a1 1 0 0 1 .557 1.3l-2.4 6a1 1 0 0 1-1.857-.743l2.4-6a1 1 0 0 1 1.3-.558ZM17.8 22.198a1 1 0 0 1 1 1v4.8a.2.2 0 0 0 .2.2h1.2a1 1 0 1 1 0 2H19a2.2 2.2 0 0 1-2.2-2.2v-4.8a1 1 0 0 1 1-1ZM23.244 22.842a2.2 2.2 0 0 1 1.556-.644H26a1 1 0 1 1 0 2h-1.2a.2.2 0 0 0-.2.2c0 .339.149.512.8 1l.064.047c.562.42 1.536 1.147 1.536 2.553a2.2 2.2 0 0 1-2.2 2.2h-1.2a1 1 0 1 1 0-2h1.2a.2.2 0 0 0 .2-.2c0-.339-.149-.512-.8-1l-.064-.047c-.562-.42-1.536-1.147-1.536-2.553a2.2 2.2 0 0 1 .644-1.556Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7 5.198a1 1 0 0 1 1-1h10v6a1 1 0 0 0 1 1h6v7a1 1 0 1 0 2 0v-7.671a3 3 0 0 0-.879-2.122l-5.328-5.328a3 3 0 0 0-2.121-.879H8a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3 1 1 0 1 0 0-2 1 1 0 0 1-1-1v-22Zm17.086 4L20 5.112v4.086h4.086Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgExcelFileOutlined.propTypes = propTypes;
SvgExcelFileOutlined.defaultProps = defaultProps;
export default SvgExcelFileOutlined;
