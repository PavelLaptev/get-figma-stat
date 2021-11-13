import * as React from "react";
import Icon from "../Icon";

import styles from "./styles.module.scss";

interface Props {
  label?: {
    name: string;
    link: string;
  };
  caption?: {
    name: string;
    link: string;
  };
  count?: number;
  index?: number;
  imgLink?: string;
  icon?: IconProps["name"];
  className?: string;
}

const ListFigmaItem: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <div className={styles.wrapLeft}>
        <span className={styles.indexNum}>{props.index}.</span>
        {props.imgLink !== "" ? (
          <img src={props.imgLink} alt="preview" className={styles.image} />
        ) : null}
        <div className={styles.leftText}>
          <a
            className={styles.label}
            href={props.label?.link}
            target="_blank"
            rel="noreferrer"
          >
            {props.label?.name}
          </a>
          {props.caption?.name !== "" ? (
            <div className={styles.caption}>
              <span>by </span>
              <a href={props.caption?.link} target="_blank" rel="noreferrer">
                {props.caption?.name}
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.wrapRight}>
        <span className={styles.count}>{props.count}</span>
        <Icon name={props.icon} />
      </div>
    </div>
  );
};

ListFigmaItem.defaultProps = {
  caption: {
    name: "",
    link: "#",
  },
  label: {
    name: "label",
    link: "#",
  },
  index: 0,
  imgLink: "",
  className: "",
} as Partial<Props>;

export default ListFigmaItem;
