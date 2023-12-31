import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgHiddenOutlined(props: ISvgProps) {
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
            d="M27.707 5.905a1 1 0 0 0-1.414-1.414l-3.39 3.39c-1.891-1-4.186-1.683-6.903-1.683-4.825 0-8.317 2.153-10.582 4.418A16.064 16.064 0 0 0 2.9 13.869c-.277.479-.49.916-.638 1.28C2.13 15.48 2 15.839 2 16.2c0 .36.129.717.262 1.047.148.365.36.802.638 1.281a16.064 16.064 0 0 0 2.518 3.253 15.844 15.844 0 0 0 1.936 1.65l-3.061 3.061a1 1 0 1 0 1.414 1.414l22-22ZM8.79 21.995l2.32-2.32a6 6 0 0 1 8.367-8.367l1.935-1.935C19.888 8.66 18.091 8.198 16 8.198c-4.175 0-7.183 1.848-9.168 3.832a14.069 14.069 0 0 0-2.2 2.841 8.393 8.393 0 0 0-.515 1.028 2.956 2.956 0 0 0-.106.3c.02.067.053.167.106.299.106.264.276.616.514 1.027a14.066 14.066 0 0 0 2.201 2.841 13.767 13.767 0 0 0 1.957 1.629Zm9.243-9.243a4 4 0 0 0-5.478 5.478l5.478-5.478Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m24.782 11.659 1.415-1.415a16.061 16.061 0 0 1 2.903 3.625c.277.479.49.916.638 1.28.133.331.262.689.262 1.05 0 .36-.129.717-.262 1.047-.148.365-.36.802-.638 1.281a16.06 16.06 0 0 1-2.518 3.253c-2.265 2.266-5.757 4.418-10.582 4.418-1.836 0-3.479-.311-4.935-.822l1.6-1.6c1.017.267 2.127.422 3.335.422 4.175 0 7.183-1.847 9.168-3.832a14.067 14.067 0 0 0 2.2-2.84c.24-.412.409-.764.515-1.028a2.96 2.96 0 0 0 .106-.3 2.96 2.96 0 0 0-.106-.3 8.392 8.392 0 0 0-.514-1.027 14.07 14.07 0 0 0-2.587-3.212Z"
          />
          <path
            fill="currentColor"
            d="M14.446 21.995a6 6 0 0 0 7.35-7.35l-1.804 1.804a4 4 0 0 1-3.742 3.741l-1.804 1.805Z"
          />
        </svg>
      }
    </span>
  );
}
SvgHiddenOutlined.propTypes = propTypes;
SvgHiddenOutlined.defaultProps = defaultProps;
export default SvgHiddenOutlined;
