import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  className?: string;
  mode?: "primary" | "secondary";
  onClick: (value: string) => void;
}

const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <button
      className={`${styles.wrap} ${props.className} ${styles[`${props.mode}`]}`}
      onClick={() => props.onClick(props.text)}
    >
      <span>{props.text}</span>
    </button>
  );
};

Button.defaultProps = {
  text: "Text",
  className: "",
  mode: "primary",
} as Partial<Props>;

export default Button;
