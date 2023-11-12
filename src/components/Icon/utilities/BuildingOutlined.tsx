import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgBuildingOutlined(props: ISvgProps) {
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
            d="M11.333 3.365c0-.645.523-1.167 1.167-1.167h7c.644 0 1.167.522 1.167 1.167V4.53H23c.644 0 1.167.523 1.167 1.167v11.667h4.666c.645 0 1.167.522 1.167 1.167v10.5c0 .644-.522 1.166-1.167 1.166H3.167A1.167 1.167 0 0 1 2 29.032v-10.5c0-.645.522-1.167 1.167-1.167h4.666V5.698c0-.644.523-1.167 1.167-1.167h2.333V3.365Zm2.334 1.166v1.167c0 .644-.523 1.167-1.167 1.167h-2.333v11.667c0 .644-.523 1.166-1.167 1.166H4.333v8.167h23.334v-8.167H23a1.167 1.167 0 0 1-1.167-1.166V6.865H19.5a1.167 1.167 0 0 1-1.167-1.167V4.531h-4.666Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.5 24.365c0-.644.522-1.167 1.167-1.167h4.666c.645 0 1.167.523 1.167 1.167v4.667c0 .644-.522 1.166-1.167 1.166h-4.666a1.167 1.167 0 0 1-1.167-1.166v-4.667Zm2.333 1.167v2.333h2.334v-2.333h-2.334Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9 23.198H6.667v2.334H9v-2.334ZM25.334 23.198h-2.333v2.334h2.333v-2.334ZM14.834 13.865h-2.333v2.333h2.333v-2.333ZM19.5 13.865h-2.333v2.333H19.5v-2.333ZM14.834 18.532h-2.333v2.333h2.333v-2.333ZM19.5 18.532h-2.333v2.333H19.5v-2.333ZM14.834 9.198h-2.333v2.334h2.333V9.198ZM19.5 9.198h-2.333v2.334H19.5V9.198Z"
          />
        </svg>
      }
    </span>
  );
}
SvgBuildingOutlined.propTypes = propTypes;
SvgBuildingOutlined.defaultProps = defaultProps;
export default SvgBuildingOutlined;
