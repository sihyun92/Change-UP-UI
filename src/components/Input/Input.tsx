import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import { InputHTMLAttributes } from "react";

const cx = classNames.bind(styles);

export type BorderType = "border" | "underline";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  borderType: BorderType;
}

function Input({ ...rest }: InputProps) {
  return <input className={cx("block", `${rest.borderType}`)} {...rest} />;
}

export default Input;
