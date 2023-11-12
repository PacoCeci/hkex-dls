import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBookOutlined(props: ISvgProps) {
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
            d="M15.763 27.17c-4.304-.952-9.08-.463-12.37.947A1 1 0 0 1 2 27.198v-18.5a1.5 1.5 0 0 1 1.5-1.5H5v-1.37c0-.702.497-1.346 1.237-1.469C9.621 3.8 13.361 4.75 16 6.87c2.639-2.12 6.379-3.07 9.763-2.51.74.122 1.237.766 1.237 1.468v1.37h1.5a1.5 1.5 0 0 1 1.5 1.5v18.5a1 1 0 0 1-1.394.92c-3.29-1.41-8.065-1.9-12.369-.948a1 1 0 0 1-.474 0ZM17 8.64c2.07-1.797 5.151-2.707 8-2.37v14.966c-2.729.2-5.67 1.202-8 2.832V8.641Zm-2 0c-2.07-1.797-5.151-2.707-8-2.37v14.966c2.729.2 5.67 1.202 8 2.832V8.641ZM6 23.199c1.998 0 4.207.543 6.143 1.5-2.877-.118-5.735.268-8.143 1.057V9.198h1v13a1 1 0 0 0 1 1Zm21-14v13a1 1 0 0 1-1 1c-1.998 0-4.207.543-6.143 1.5 2.877-.118 5.735.268 8.143 1.057V9.198h-1Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBookOutlined.propTypes = propTypes;
SvgBookOutlined.defaultProps = defaultProps;
export default SvgBookOutlined;
