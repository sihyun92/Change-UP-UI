import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Close from "../Close/Close";
import { ComponentProps, HTMLAttributes, ReactNode } from "react";

const cx = classNames.bind(styles);

export type ModalBg = "default-bg" | "message-bg" | "warning-bg" | "error-bg";
export type ModalBorder =
  | "default-border"
  | "message-border"
  | "warning-border"
  | "error-border";

export interface ModalProps extends ComponentProps<"div"> {
  shadow?: boolean;
  backgroundColor: ModalBg;
  border?: ModalBorder;
}

function Modal({ ...rest }: ModalProps) {
  return (
    <div
      className={cx(
        "block",
        `${rest.shadow ? "shadow" : ""}`,
        `${rest.backgroundColor}`,
        `${rest.border}`,
      )}
      {...rest}
    >
      <Close />
      <div className={cx("content")}>
        <Text fontWeight="normal" size="medium">
          {rest.children}
        </Text>
        <div className={cx("button-container")}>
          <Button size="small">1</Button>
          <Button size="small">2</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
