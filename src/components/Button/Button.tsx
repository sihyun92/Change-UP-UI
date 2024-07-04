import { CSSProperties, useCallback, useState } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { ButtonProps } from "@/lib/interface/button";

const cx = classNames.bind(styles);

function Button({ ...rest }: ButtonProps) {
  // hook & function
  const [hover, setHover] = useState(false);
  const onMouseEnter = useCallback(() => {
    setHover(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  // primary outline className
  const primaryOutline = `${
    rest.buttonOutline
      ? rest.buttonColor === "primary"
        ? "primary-outline"
        : ""
      : ""
  }`;
  // secondary outline className
  const secondaryOutline = `${
    rest.buttonOutline
      ? rest.buttonColor === "secondary"
        ? "secondary-outline"
        : ""
      : ""
  }`;

  // dynamicStyle
  const dynamicStyle: CSSProperties = {
    color:
      (hover ? rest.hoverColor : rest.color) &&
      (rest.disabled ? rest.disabledColor : rest.color),
    background:
      (hover ? rest.hoverBackground : rest.background) &&
      (rest.disabled ? rest.disabledBackground : rest.background),
    fontSize: rest.fontSize,
    padding: rest.padding,
    borderRadius: rest.radius,
    border:
      (hover ? rest.hoverBorder : rest.border) &&
      (rest.disabled ? rest.disabledBorder : rest.border),
  };

  return (
    <button
      style={dynamicStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cx(
        `block`,
        `${rest.shape}`,
        `${rest.buttonSize}`,
        `${rest.buttonColor}`,
        `${primaryOutline}`,
        `${secondaryOutline}`,
        `${rest.shadow && "shadow"}`,
      )}
      {...rest}
    />
  );
}

export default Button;
