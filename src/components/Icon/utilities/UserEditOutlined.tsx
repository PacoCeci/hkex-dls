import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgUserEditOutlined(props: ISvgProps) {
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
            d="M12 4.298a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-5.5 3.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM15.559 17.196A8.02 8.02 0 0 0 4 24.303v1.995h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-3.01A10.02 10.02 0 0 1 16.441 15.4a1 1 0 0 1-.882 1.794ZM25.32 14.618a1 1 0 0 1 .707.293l3.68 3.68a1 1 0 0 1 0 1.414l-9.42 9.42a1 1 0 0 1-.572.284l-4.26.58a1 1 0 0 1-1.125-1.13l.6-4.26a1 1 0 0 1 .282-.567l9.4-9.42a1 1 0 0 1 .708-.294Zm0 2.415-8.456 8.475-.37 2.621 2.617-.356 8.475-8.475-2.265-2.265Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgUserEditOutlined.propTypes = propTypes;
SvgUserEditOutlined.defaultProps = defaultProps;
export default SvgUserEditOutlined;
