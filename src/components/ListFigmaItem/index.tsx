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
  imgLink: string;
  icon?:
    | "installs"
    | "views"
    | "comments"
    | "arrow"
    | "likes"
    | "duplicates"
    | "gh";
  className?: string;
}

const ListFigmaItem: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <div className={styles.wrapLeft}>
        <span className={styles.indexNum}>{props.index}.</span>
        <img src={props.imgLink} alt="preview" className={styles.image} />
        <div className={styles.leftText}>
          <a
            className={styles.label}
            href={props.label?.link}
            target="_blank"
            rel="noreferrer"
          >
            {props.label?.name}
          </a>
          <div className={styles.author}>
            <span>by </span>
            <a href={props.caption?.link} target="_blank" rel="noreferrer">
              {props.caption?.name}{" "}
            </a>
          </div>
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
  author: {
    name: "author",
    link: "#",
  },
  label: {
    name: "label",
    link: "#",
  },
  index: 0,
  className: "",
} as Partial<Props>;

export default ListFigmaItem;
