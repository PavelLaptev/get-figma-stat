import * as React from "react";
import Icon from "../Icon";

import styles from "./styles.module.scss";

interface Props {
  label?: string;
  value?: string;
  icon?: IconProps["name"];
  className?: string;
}

const ListItem: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <span className={styles.label}>{props.label}:</span>
      <div className={styles.valueWrap}>
        <Icon name={props.icon} className={styles.icon} />
        <span className={styles.value}>{props.value}</span>
      </div>
    </div>
  );
};

ListItem.defaultProps = {
  label: "label",
  value: "value",
  className: "",
} as Partial<Props>;

export default ListItem;
