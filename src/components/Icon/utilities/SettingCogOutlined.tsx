import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgSettingCogOutlined(props: ISvgProps) {
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
            d="M12.5 5.198a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v.571c.482.162.949.357 1.398.581l.405-.405a3 3 0 0 1 4.243 0l.707.707a3 3 0 0 1 0 4.243l-.405.405c.224.45.419.916.581 1.398H27a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-.571a10.93 10.93 0 0 1-.581 1.398l.405.405a3 3 0 0 1 0 4.243l-.707.707a3 3 0 0 1-4.243 0l-.405-.405c-.45.224-.916.419-1.398.581v.571a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-.57a10.951 10.951 0 0 1-1.398-.582l-.405.405a3 3 0 0 1-4.243 0l-.707-.707a3 3 0 0 1 0-4.243l.405-.405c-.224-.449-.419-.916-.581-1.398H5a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h.57c.163-.482.357-.949.582-1.398l-.405-.405a3 3 0 0 1 0-4.243l.707-.707a3 3 0 0 1 4.243 0l.405.405c.449-.224.916-.419 1.398-.581v-.57Zm3-1a1 1 0 0 0-1 1v1.316a1 1 0 0 1-.75.969 8.941 8.941 0 0 0-2.318.963 1 1 0 0 1-1.216-.154l-.934-.933a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 0 1.415l.933.933a1 1 0 0 1 .154 1.216 8.941 8.941 0 0 0-.963 2.318 1 1 0 0 1-.969.75H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.316a1 1 0 0 1 .969.75c.212.824.54 1.602.963 2.318a1 1 0 0 1-.154 1.216l-.933.934a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414 0l.934-.933a1 1 0 0 1 1.216-.154c.716.424 1.495.75 2.318.963a1 1 0 0 1 .75.969v1.316a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.316a1 1 0 0 1 .75-.969 8.944 8.944 0 0 0 2.318-.963 1 1 0 0 1 1.216.154l.934.933a1 1 0 0 0 1.414 0l.707-.707a1 1 0 0 0 0-1.414l-.934-.934a1 1 0 0 1-.153-1.216c.424-.716.75-1.494.963-2.318a1 1 0 0 1 .968-.75H27a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1.316a1 1 0 0 1-.969-.75 8.946 8.946 0 0 0-.963-2.318 1 1 0 0 1 .154-1.216l.933-.933a1 1 0 0 0 0-1.415l-.707-.707a1 1 0 0 0-1.415 0l-.933.934a1 1 0 0 1-1.216.153 8.943 8.943 0 0 0-2.318-.963 1 1 0 0 1-.75-.969V5.198a1 1 0 0 0-1-1h-1Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9 16.198c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.139-7-7Zm7-5c-2.756 0-5 2.244-5 5s2.244 5 5 5 5-2.244 5-5-2.244-5-5-5Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgSettingCogOutlined.propTypes = propTypes;
SvgSettingCogOutlined.defaultProps = defaultProps;
export default SvgSettingCogOutlined;
