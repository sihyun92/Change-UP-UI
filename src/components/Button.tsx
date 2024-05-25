import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor =
  | "primary"
  | "primary-outline"
  | "secondary"
  | "secondary-outline"
  | "success"
  | "failure";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
}

function Button({ ...rest }: ButtonProps) {
  return (
    <button
      className={cx("block", `${rest.size}`, `${rest.color}`)}
      {...rest}
    />
  );
}

export default Button;
