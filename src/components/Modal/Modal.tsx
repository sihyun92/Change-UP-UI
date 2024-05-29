import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import Close from "../Close/Close";
import { HTMLAttributes } from "react";
import ModalBackground from "./ModalBackground";

const cx = classNames.bind(styles);

export type ModalBg = "default-bg" | "message-bg" | "warning-bg" | "error-bg";
export type ModalBorder =
  | "default-border"
  | "message-border"
  | "warning-border"
  | "error-border";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  shadow?: boolean;
  backgroundColor: ModalBg;
  border?: ModalBorder;
  visibleClose: boolean;
}

function Modal({ ...rest }: ModalProps) {
  return (
    <>
      <ModalBackground>
        <div
          className={cx(
            "block",
            `${rest.shadow ? "shadow" : ""}`,
            `${rest.backgroundColor}`,
            `${rest.border}`,
          )}
          {...rest}
        >
          {rest.visibleClose && <Close />}
          <div className={cx("content")}>{rest.children}</div>
        </div>
      </ModalBackground>
    </>
  );
}

export default Modal;
