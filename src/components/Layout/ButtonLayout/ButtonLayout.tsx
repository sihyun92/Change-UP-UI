import { HTMLAttributes } from "react";
import styles from "./ButtonLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ButtonLayoutProps extends HTMLAttributes<HTMLDivElement> {}

function ButtonLayout({ ...rest }: ButtonLayoutProps) {
  return (
    <div className={cx("block")} {...rest}>
      {rest.children}
    </div>
  );
}

export default ButtonLayout;
