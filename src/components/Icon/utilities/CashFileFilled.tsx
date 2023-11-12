import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCashFileFilled(props: ISvgProps) {
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
            d="M8 2.198h10v8a1 1 0 0 0 1 1h8v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-22a3 3 0 0 1 3-3Zm1 19a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1Zm1 5a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H10Zm2.308-20a1 1 0 0 1 1 1v.279c1.21.318 2.002 1.209 2.273 2.217a1 1 0 1 1-1.931.52c-.108-.402-.481-.862-1.342-.862-.512 0-.864.126-1.06.269a.557.557 0 0 0-.248.494c0 .139.028.278.162.432.152.174.52.457 1.396.683 1.112.287 1.897.725 2.403 1.304.522.6.655 1.245.655 1.747 0 .894-.412 1.63-1.07 2.11a3.343 3.343 0 0 1-1.238.546v.261a1 1 0 1 1-2 0v-.279c-1.211-.319-2.002-1.209-2.273-2.218a1 1 0 1 1 1.93-.52c.11.403.482.863 1.343.863.512 0 .864-.126 1.06-.269a.557.557 0 0 0 .248-.494.607.607 0 0 0-.163-.432c-.151-.174-.52-.457-1.395-.683-1.112-.287-1.897-.725-2.403-1.304A2.604 2.604 0 0 1 9 10.115c0-.895.412-1.63 1.07-2.11a3.343 3.343 0 0 1 1.238-.546v-.261a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M20 2.198v7h7l-7-7Z" />
        </svg>
      }
    </span>
  );
}
SvgCashFileFilled.propTypes = propTypes;
SvgCashFileFilled.defaultProps = defaultProps;
export default SvgCashFileFilled;
