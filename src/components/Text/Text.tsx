import { HTMLAttributes } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type TextSize = "small" | "medium" | "large" | "larger" | "largest";
export type TextWeight =
  | "light"
  | "normal"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: TextSize;
  fontWeight: TextWeight;
}

function Text({ ...rest }: TextProps) {
  return (
    <span
      className={cx("block", `${rest.size}`, `${rest.fontWeight}`)}
      {...rest}
    >
      {rest.children}
    </span>
  );
}

export default Text;
