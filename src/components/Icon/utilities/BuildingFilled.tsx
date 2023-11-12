import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBuildingFilled(props: ISvgProps) {
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
            d="M12.5 2.198c-.644 0-1.167.522-1.167 1.167V4.53H9c-.644 0-1.167.523-1.167 1.167v11.667H3.167c-.645 0-1.167.522-1.167 1.166v10.5c0 .645.522 1.167 1.167 1.167H12.5v-5.833c0-.645.522-1.167 1.167-1.167h4.666c.645 0 1.167.522 1.167 1.167v5.833h9.333c.645 0 1.167-.522 1.167-1.167v-10.5c0-.644-.522-1.166-1.167-1.166h-4.666V5.698c0-.644-.523-1.167-1.167-1.167h-2.333V3.365c0-.645-.523-1.167-1.167-1.167h-7Zm2.333 7H12.5v2.333h2.333V9.198Zm0 4.666H12.5v2.334h2.333v-2.334Zm-8.167 9.334h2.333v2.333H6.666v-2.333Zm16.334 0h2.333v2.333H23v-2.333Zm-5.834-9.334h2.333v2.334h-2.333v-2.334Zm-2.333 4.667H12.5v2.334h2.333V18.53Zm2.333 0h2.333v2.334h-2.333V18.53Zm0-9.333h2.333v2.333h-2.333V9.198Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgBuildingFilled.propTypes = propTypes;
SvgBuildingFilled.defaultProps = defaultProps;
export default SvgBuildingFilled;
