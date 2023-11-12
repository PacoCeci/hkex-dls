import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import { CloseOutlined } from "../Icon/utilities";

export type ChipType = "default" | "error";
interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  closable?: boolean;
  className?: string;
  disabled?: boolean;
  type?: ChipType;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Chip: FC<ChipProps> = (props) => {
  const {
    children,
    closable,
    className,
    disabled,
    type = "default",
    onClose,
    ...restProps
  } = props;

  const classes = classNames("hecl-chip", className, {
    disabled: disabled,
    [`hecl-chip-${type}`]: type,
  });

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);

    if (e.defaultPrevented) {
      return;
    }
  };

  return (
    <span {...restProps} className={classes}>
      {children}
      {closable && (
        <span
          onClick={handleCloseClick}
          style={{
            cursor: "pointer",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CloseOutlined></CloseOutlined>
        </span>
      )}
    </span>
  );
};

export default Chip;
