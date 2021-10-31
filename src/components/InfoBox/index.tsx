import * as React from "react";

import styles from "./styles.module.scss";

interface Props {}

const CodeBlock: React.FunctionComponent<Props> = (props) => {
  return (
    <section className={styles.wrap}>
      <pre className={styles.code}>{props.children}</pre>
    </section>
  );
};

CodeBlock.defaultProps = {} as Partial<Props>;

export default CodeBlock;
