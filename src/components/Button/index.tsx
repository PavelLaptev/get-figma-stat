import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  label: string;
  sublabel?: string;
  className?: string;
  mode?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  onClick: (value: string) => void;
}

const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={`${styles.wrap} ${props.className} ${styles[`${props.mode}`]}`}
      onClick={() => props.onClick(props.label)}
    >
      <span className={styles.label}>{props.label}</span>
      {props.sublabel !== "" ? (
        <span className={styles.sublabel}>{props.sublabel}</span>
      ) : null}
    </button>
  );
};

Button.defaultProps = {
  label: "label",
  sublabel: "",
  className: "",
  mode: "primary",
  disabled: false,
} as Partial<Props>;

export default Button;
