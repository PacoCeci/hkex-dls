import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgLocationPinOutlined(props: ISvgProps) {
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
            d="M16 4.198c-4.976 0-9 4.022-9 8.971 0 4.872 2.203 8.67 4.603 11.303a19.722 19.722 0 0 0 3.383 2.964c.406.276.75.483 1.014.624.263-.141.608-.348 1.014-.624.961-.655 2.184-1.65 3.383-2.964C22.797 21.84 25 18.042 25 13.169c0-4.95-4.024-8.97-9-8.97Zm-.396 24.05c-.038.014-.034.01.004 0h-.004Zm.788 0c.038.01.042.014.003 0h-.003ZM5 13.168C5 7.11 9.925 2.199 16 2.199s11 4.911 11 10.97c0 11.03-10 17.03-11 17.03s-11-6-11-17.03Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 16.198a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgLocationPinOutlined.propTypes = propTypes;
SvgLocationPinOutlined.defaultProps = defaultProps;
export default SvgLocationPinOutlined;
