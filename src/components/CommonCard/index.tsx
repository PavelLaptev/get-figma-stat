import * as React from "react";

import styles from "./styles.module.scss";

interface Props {
  title?: string | boolean;
  isLoading?: boolean;
  className?: string;
}

const CommonCard: React.FunctionComponent<Props> = (props) => {
  return (
    <section className={styles.wrap}>
      {!props.isLoading ? (
        <>
          {props.title ? <h2 className={styles.title}>{props.title}</h2> : null}
          {props.children}
        </>
      ) : (
        <>
          <div className={`${styles.loading} ${styles.loadingTitle}`} />
          <div className={`${styles.loadingFlex}`}>
            <div className={`${styles.loading} ${styles.loadingText}`} />
            <div className={`${styles.loading} ${styles.loadingText}`} />
          </div>
        </>
      )}
    </section>
  );
};

CommonCard.defaultProps = {
  className: "",
  isLoading: false,
  title: false,
} as Partial<Props>;

export default CommonCard;
