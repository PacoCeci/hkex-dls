import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  Children,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonType = "default" | "primary" | "link";
export type ButtonShape = "round" | "circle";
export type ButtonHTMLType = "submit" | "button" | "reset";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  htmlType?: ButtonHTMLType;
  icon?: ReactNode;
  shape?: ButtonShape;
  size?: ButtonSize;
  type?: ButtonType;
}

type MergedHTMLAttributes = Omit<
  HTMLAttributes<HTMLElement> &
    ButtonHTMLAttributes<HTMLElement> &
    AnchorHTMLAttributes<HTMLElement>,
  "type"
>;

export type ButtonProps = Partial<BaseButtonProps & MergedHTMLAttributes>;

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    disabled,
    href,
    htmlType = "button",
    icon,
    shape = "round",
    size = "md",
    type = "default",
    ...restProps
  } = props;

  const classes = classNames("hecl-btn", className, {
    [`hecl-btn-${type}`]: type,
    [`hecl-btn-${size}`]: size,
    disabled: type === "link" && disabled,
    // icon button
    [`hecl-btn-icon`]: icon && Children.count(children) === 0,
    [`hecl-btn-${shape}`]: icon && Children.count(children) === 0,
  });
  if (type === "link" && href) {
    return (
      <a {...restProps} className={classes} href={href}>
        {icon}
        {children}
      </a>
    );
  } else {
    return (
      <button
        {...restProps}
        className={classes}
        disabled={disabled}
        type={htmlType}
      >
        {icon}
        {children}
      </button>
    );
  }
};

export default Button;
