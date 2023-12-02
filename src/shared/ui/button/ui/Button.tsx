import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "../model/Button.types";

export const Button: FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button onClick={(event) => onClick(event)} className={`${styles.button} ${styles[type]}`}>
      {children}
    </button>
  );
};
