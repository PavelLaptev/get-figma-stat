import * as React from "react";

import styles from "./styles.module.scss";

interface Props {
  title?: string;
  className?: string;
}

const CommonCard: React.FunctionComponent<Props> = (props) => {
  return (
    <section className={styles.wrap}>
      {props.title !== "" ? (
        <h2 className={styles.title}>{props.title}</h2>
      ) : null}
      {props.children}
    </section>
  );
};

CommonCard.defaultProps = {
  className: "",
  title: "",
} as Partial<Props>;

export default CommonCard;
