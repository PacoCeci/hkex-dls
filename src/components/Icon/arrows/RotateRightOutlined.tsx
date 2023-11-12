import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgRotateRightOutlined(props: ISvgProps) {
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
            d="M27 4.198a1 1 0 1 1 2 0v7.5a1 1 0 0 1-1 1h-7.5a1 1 0 1 1 0-2h5.029A10.996 10.996 0 0 0 16 5.198c-6.075 0-11 4.925-11 11s4.925 11 11 11c.696 0 1.376-.064 2.035-.188a1 1 0 1 1 .368 1.966 13.06 13.06 0 0 1-2.403.222c-7.18 0-13-5.82-13-13s5.82-13 13-13a12.99 12.99 0 0 1 11 6.07v-5.07ZM28.956 17.28a1 1 0 1 0-1.994-.164c-.057.69-.177 1.363-.356 2.01a1 1 0 0 0 1.928.532c.212-.767.354-1.562.422-2.378ZM26.216 22.575a1 1 0 0 1 .202 1.4 13.065 13.065 0 0 1-3.536 3.254 1 1 0 0 1-1.06-1.696 11.062 11.062 0 0 0 2.994-2.756 1 1 0 0 1 1.4-.202Z"
          />
        </svg>
      }
    </span>
  );
}
SvgRotateRightOutlined.propTypes = propTypes;
SvgRotateRightOutlined.defaultProps = defaultProps;
export default SvgRotateRightOutlined;
