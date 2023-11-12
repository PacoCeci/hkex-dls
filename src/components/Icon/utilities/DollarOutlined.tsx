import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgDollarOutlined(props: ISvgProps) {
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
            d="M16 2.198a1 1 0 0 1 1 1v2.053c3.297.36 5.329 2.487 5.966 4.854a1 1 0 0 1-1.931.52C20.567 8.889 18.97 7.198 16 7.198c-1.566 0-2.841.383-3.696 1.006C11.479 8.805 11 9.656 11 10.781c0 .652.157 1.42.816 2.176.678.777 1.97 1.637 4.434 2.273 2.702.697 4.41 1.712 5.441 2.894a5.172 5.172 0 0 1 1.31 3.49c0 1.792-.808 3.233-2.126 4.194-1.054.769-2.4 1.21-3.875 1.345v2.045a1 1 0 1 1-2 0v-2.053c-3.296-.36-5.328-2.487-5.965-4.854a1 1 0 0 1 1.93-.52c.468 1.736 2.065 3.427 5.035 3.427 1.567 0 2.842-.382 3.697-1.006C20.52 23.591 21 22.74 21 21.615c0-.652-.156-1.42-.816-2.176-.677-.777-1.969-1.637-4.434-2.273-2.701-.697-4.41-1.712-5.44-2.894A5.172 5.172 0 0 1 9 10.782c0-1.792.807-3.233 2.125-4.194 1.054-.768 2.4-1.21 3.876-1.345V3.198a1 1 0 0 1 1-1Z"
          />
        </svg>
      }
    </span>
  );
}
SvgDollarOutlined.propTypes = propTypes;
SvgDollarOutlined.defaultProps = defaultProps;
export default SvgDollarOutlined;
