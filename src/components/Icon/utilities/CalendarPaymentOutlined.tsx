import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarPaymentOutlined(props: ISvgProps) {
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
            d="M16.999 11.198a1 1 0 0 0-2 0v.476a3.884 3.884 0 0 0-1.567.654 2.863 2.863 0 0 0-1.202 2.37c0 .566.148 1.29.737 1.965.57.655 1.471 1.165 2.782 1.503 1.074.277 1.558.633 1.775.882.2.229.244.447.244.65 0 .34-.133.574-.38.755-.278.202-.746.36-1.389.36-1.124 0-1.65-.613-1.804-1.182a1 1 0 0 0-1.93.52c.317 1.18 1.265 2.227 2.734 2.555v.492a1 1 0 1 0 2 0v-.476a3.882 3.882 0 0 0 1.567-.653 2.863 2.863 0 0 0 1.202-2.37c0-.567-.148-1.291-.737-1.966-.57-.655-1.471-1.165-2.782-1.503-1.074-.277-1.558-.632-1.775-.882a.929.929 0 0 1-.244-.65c0-.34.133-.574.38-.754.278-.203.745-.361 1.389-.361 1.124 0 1.65.614 1.804 1.183a1 1 0 0 0 1.93-.52c-.317-1.181-1.265-2.227-2.734-2.556v-.492Z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11 3.198a1 1 0 0 1 1 1v1h8v-1a1 1 0 1 1 2 0v1h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-18a3 3 0 0 1 3-3h4v-1a1 1 0 0 1 1-1Zm9 4v1a1 1 0 1 0 2 0v-1h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1h4v1a1 1 0 1 0 2 0v-1h8Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalendarPaymentOutlined.propTypes = propTypes;
SvgCalendarPaymentOutlined.defaultProps = defaultProps;
export default SvgCalendarPaymentOutlined;
