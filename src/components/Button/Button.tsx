import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "primary" | "secondary" | "success" | "failure";
export type ButtonOutline = boolean;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  outline?: ButtonOutline;
}

function Button({ ...rest }: ButtonProps) {
  // primary outline className
  const primaryOutline = `${
    rest.outline ? (rest.color === "primary" ? "primary-outline" : "") : ""
  }`;
  // secondary outline className
  const secondaryOutline = `${
    rest.outline ? (rest.color === "secondary" ? "secondary-outline" : "") : ""
  }`;

  return (
    <button
      className={cx(
        "block",
        `${rest.size}`,
        `${rest.color}`,
        `${primaryOutline}`,
        `${secondaryOutline}`,
      )}
      {...rest}
    />
  );
}

export default Button;
