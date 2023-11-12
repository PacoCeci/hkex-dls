import * as React from "react";
import { propTypes, defaultProps, ISvgProps } from "../constants";
function SvgCalendarPaymentFilled(props: ISvgProps) {
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
            d="M12 4.198a1 1 0 1 0-2 0v1H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-18a3 3 0 0 0-3-3h-4v-1a1 1 0 1 0-2 0v1h-8v-1Zm5 7a1 1 0 0 0-2 0v.476a3.883 3.883 0 0 0-1.568.654 2.863 2.863 0 0 0-1.202 2.37c0 .566.148 1.29.737 1.965.571.655 1.472 1.165 2.783 1.503 1.073.277 1.557.633 1.775.882.2.229.244.447.244.65 0 .34-.133.574-.38.755-.279.202-.746.36-1.39.36-1.124 0-1.65-.613-1.803-1.182a1 1 0 0 0-1.931.52c.318 1.18 1.265 2.227 2.734 2.555v.492a1 1 0 1 0 2 0v-.476a3.882 3.882 0 0 0 1.568-.653 2.863 2.863 0 0 0 1.202-2.37c0-.567-.148-1.291-.737-1.966-.571-.655-1.472-1.165-2.783-1.503-1.073-.277-1.557-.632-1.775-.882a.928.928 0 0 1-.244-.65c0-.34.133-.574.38-.754.279-.203.746-.361 1.39-.361 1.124 0 1.65.614 1.803 1.183a1 1 0 0 0 1.931-.52c-.318-1.181-1.265-2.227-2.735-2.556v-.492Z"
            clipRule="evenodd"
          />
        </svg>
      }
    </span>
  );
}
SvgCalendarPaymentFilled.propTypes = propTypes;
SvgCalendarPaymentFilled.defaultProps = defaultProps;
export default SvgCalendarPaymentFilled;
