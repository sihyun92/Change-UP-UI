import { HTMLAttributes } from "react";
import styles from "./ModalBackground.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export interface ModalBackgroundProps extends HTMLAttributes<HTMLDivElement> {}

function ModalBackground({ ...rest }: ModalBackgroundProps) {
  return (
    <div className={cx("block")} {...rest}>
      {rest.children}
    </div>
  );
}

export default ModalBackground;
