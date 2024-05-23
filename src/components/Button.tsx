import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

function Button({ ...rest }: ButtonProps) {
  return <button className={cx("block", `${rest.size}`)} {...rest} />;
}

export default Button;
