import classNames from "classnames";
import { FC } from "react";
import {
  CautionFilled,
  CautionTriangleFilled,
  CircleCheckFilled,
  CloseOutlined,
} from "../Icon/utilities";

export type AlertType = "error" | "info" | "success" | "warning";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: AlertType;
  message?: String;
}

const Alert: FC<AlertProps> = (props) => {
  const { className, message, type = "info", ...restProps } = props;

  const classes = classNames("hecl-alert", className, {
    [`btn-${type}`]: type,
  });

  return (
    <div {...restProps} className={classes}>
      <span className="hecl-alert-symbol">
        {type === "error" && (
          <CautionTriangleFilled
            color="#cf1f38"
            size="32px"
          ></CautionTriangleFilled>
        )}
        {type === "info" && (
          <CautionFilled color="#41748d" size="32px"></CautionFilled>
        )}
        {type === "success" && (
          <CircleCheckFilled color="#00a758" size="32px"></CircleCheckFilled>
        )}
        {type === "warning" && (
          <CautionFilled color="#ffb81c" size="32px"></CautionFilled>
        )}
      </span>
      <span className="hecl-alert-content">{message}</span>
      <span className="hecl-alert-action">
        <CloseOutlined size="20px"></CloseOutlined>
      </span>
    </div>
  );
};

export default Alert;
