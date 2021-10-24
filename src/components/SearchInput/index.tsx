import * as React from "react";
import styles from "./styles.module.scss";

interface Props {}

const SearchInput: React.FunctionComponent<Props> = (props) => {
  return (
    <section className={styles.wrap}>
      <input type="text" />
    </section>
  );
};

SearchInput.defaultProps = {} as Partial<Props>;

export default SearchInput;
