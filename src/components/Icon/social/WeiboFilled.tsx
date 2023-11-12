import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgWeiboFilled(props: ISvgProps) {
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
            d="M24.258 12.159c.416-1.313-.733-2.56-2.045-2.28-1.203.262-1.575-1.537-.389-1.794 2.74-.596 5.048 2.029 4.184 4.637-.372 1.16-2.122.59-1.75-.563ZM13.747 26.875C7.934 26.876 2 24.066 2 19.423c0-2.423 1.531-5.218 4.173-7.86 5.452-5.452 11.112-5.517 9.494-.31-.22.715.672.31.672.327 4.348-1.837 7.684-.918 6.235 2.811-.203.514.06.596.454.717 7.42 2.313 1.903 11.769-9.281 11.769Zm7.859-8c-.296-3.046-4.293-5.141-8.936-4.687-4.638.47-8.138 3.298-7.843 6.344.296 3.046 4.293 5.14 8.936 4.686 4.638-.47 8.138-3.297 7.843-6.343Zm-.58-14.51c-1.416.307-.919 2.39.454 2.095 3.954-.83 7.372 2.888 6.109 6.782-.405 1.323 1.591 2.023 2.045.656 1.744-5.458-3.013-10.713-8.608-9.532Zm-4.293 17.009c-.935 2.122-3.653 3.281-5.966 2.532-2.232-.716-3.172-2.92-2.204-4.906.968-1.936 3.45-3.03 5.654-2.466 2.297.59 3.451 2.745 2.516 4.84Zm-4.72-1.64c-.705-.296-1.64.016-2.078.705-.454.705-.235 1.531.47 1.86.717.327 1.685.015 2.139-.706.437-.717.202-1.548-.53-1.86ZM13.796 19a.691.691 0 0 0-.782.296c-.158.279-.076.58.203.705.278.11.64-.016.798-.295.153-.284.06-.596-.219-.706Z"
          />
        </svg>
      }
    </span>
  );
}
SvgWeiboFilled.propTypes = propTypes;
SvgWeiboFilled.defaultProps = defaultProps;
export default SvgWeiboFilled;
