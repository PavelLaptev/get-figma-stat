import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  href: string;
  className?: string;
}

const TextLink: React.FunctionComponent<Props> = (props) => {
  return (
    <a
      className={`${styles.link} ${props.className}`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

TextLink.defaultProps = {
  className: "",
} as Partial<Props>;

export default TextLink;
