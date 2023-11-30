import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "../model/Button.types";

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles?.button}>{children}</button>;
};
