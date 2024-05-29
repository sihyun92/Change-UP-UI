import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Close from "../Close/Close";
import { HTMLAttributes } from "react";

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
      <div className={cx("content")}>
        <Text fontWeight="normal" size="medium">
          {rest.children}
        </Text>
        <div className={cx("button-container")}>
          {rest.visibleClose ? (
            <Button size="small" color="primary">
              Confirm
            </Button>
          ) : (
            <>
              <Button size="small" color="primary" outline>
                Confirm
              </Button>
              <Button size="small" color="cancel">
                Cancel
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
