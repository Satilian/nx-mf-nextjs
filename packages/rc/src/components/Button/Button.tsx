import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface IProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  btnType?: string;
  size?: string;
}

export const Button = ({ size, className = "", ...props }: IProps) => (
  <button className={cn({ [s[`size-${size}`]]: size, [className]: className })} {...props} />
);
