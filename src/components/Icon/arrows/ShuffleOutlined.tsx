import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgShuffleOutlined(props: ISvgProps) {
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
            d="M24.293 6.905a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414l2.293-2.293H24c-1.342 0-2.506.283-3.617 1.054-1.134.787-2.292 2.137-3.5 4.415-1.292 2.436-2.634 4.086-4.125 5.12-1.514 1.05-3.1 1.411-4.758 1.411H3a1 1 0 1 1 0-2h5c1.342 0 2.506-.282 3.617-1.054 1.134-.786 2.292-2.136 3.5-4.414 1.292-2.437 2.634-4.087 4.125-5.121 1.514-1.05 3.1-1.41 4.758-1.41h2.586l-2.293-2.294Z"
          />
          <path
            fill="currentColor"
            d="M24.293 18.905a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H24c-1.21 0-2.393-.191-3.544-.717-1.15-.526-2.215-1.36-3.224-2.574a1 1 0 1 1 1.537-1.28c.852 1.025 1.686 1.655 2.519 2.035.832.38 1.718.536 2.712.536h2.586l-2.293-2.293ZM3 9.198a1 1 0 1 0 0 2h5c.994 0 1.88.156 2.713.536.832.38 1.666 1.01 2.519 2.035a1 1 0 0 0 1.537-1.28c-1.01-1.213-2.075-2.048-3.225-2.574C10.393 9.39 9.21 9.198 8 9.198H3Z"
          />
        </svg>
      }
    </span>
  );
}
SvgShuffleOutlined.propTypes = propTypes;
SvgShuffleOutlined.defaultProps = defaultProps;
export default SvgShuffleOutlined;
