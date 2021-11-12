import * as React from "react";

import styles from "./styles.module.scss";

interface Props {
  label?: string;
  value?: string;
  className?: string;
}

const ListItem: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <span className={styles.label}>{props.label}:</span>
      <span className={styles.value}>{props.value}</span>
    </div>
  );
};

ListItem.defaultProps = {
  label: "label",
  value: "value",
  className: "",
} as Partial<Props>;

export default ListItem;
