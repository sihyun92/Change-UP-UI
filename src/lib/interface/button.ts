import { ButtonHTMLAttributes } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonShape = "box" | "rounded";
type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "failure"
  | "cancel";
type ButtonOutline = boolean;
type ButtonShadow = boolean;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  background?: string;
  fontSize?: string;
  padding?: string;
  shape?: ButtonShape;
  radius?: string;
  border?: string;
  buttonSize?: ButtonSize;
  buttonColor?: ButtonColor;
  buttonOutline?: ButtonOutline;
  shadow?: ButtonShadow;
  hoverBackground?: string;
  hoverColor?: string;
  hoverBorder?: string;
  disabledBackground?: string;
  disabledColor?: string;
  disabledBorder?: string;
}