import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  text?: string;
  className?: string;
  mode?: "primary" | "secondary";
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <button
      className={`${styles.wrap} ${props.className} ${styles[`${props.mode}`]}`}
      onClick={(e) => props.onClick(e)}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "Text",
  className: "",
  mode: "primary",
} as Partial<Props>;

export default Button;
