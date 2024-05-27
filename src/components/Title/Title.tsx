import styles from "./Title.module.scss";
import classNames from "classnames/bind";
import { HTMLAttributes } from "react";

const cx = classNames.bind(styles);

export type TitleSize = "small" | "medium" | "large" | "larger" | "largest";
export type TitleType = "h1" | "h2" | "h3" | "h4" | "h5";
export type TitleWeight =
  | "light"
  | "normal"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: TitleSize;
  fontWeight?: TitleWeight;
  titleType: TitleType;
}

function Title({ ...rest }: TitleProps) {
  switch (rest.titleType) {
    case "h1":
      return (
        <h1
          className={cx("block", `${rest.size}`, `${rest.fontWeight}`)}
          {...rest}
        >
          {rest.children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cx("block", `${rest.size}`, `${rest.fontWeight}`)}
          {...rest}
        >
          {rest.children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cx("block", `${rest.size}`, `${rest.fontWeight}`)}
          {...rest}
        >
          {rest.children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cx("block", `${rest.size}`, `${rest.fontWeight}`)}
          {...rest}
        >
          {rest.children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={cx("block", `${rest.size}`, `${rest.fontWeight}`)}
          {...rest}
        >
          {rest.children}
        </h5>
      );
  }
}

export default Title;
