import styles from "./Close.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Close() {
  return (
    <button className={cx("block")}>
      <span></span>
      <span></span>
    </button>
  );
}

export default Close;
