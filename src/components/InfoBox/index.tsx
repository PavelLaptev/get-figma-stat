import * as React from "react";
import Icon from "../Icon";

import styles from "./styles.module.scss";

interface Props {
  info: any;
  counters: any;
  className?: string;
  category: "plugins" | "hub_files";
}

const InfoBox: React.FunctionComponent<Props> = (props) => {
  return (
    <section className={styles.wrap}>
      {props.category === "plugins" ? (
        <img
          src={props.info.iconUrl}
          alt="preview"
          className={styles.pluginThumb}
        />
      ) : null}
      <div className={styles.content}>
        <a
          href={`https://www.figma.com/community/${
            props.category === "plugins" ? "plugin" : "file"
          }/${props.info.id}`}
          target="_blank"
          rel="noreferrer"
          className={`${styles.title} ${styles.link}`}
        >
          {props.info.name}
        </a>

        <div className={styles.textitem}>
          <span>by </span>
          <a
            href={`https://www.figma.com/@${props.info.publisherHandle}`}
            target="_blank"
            rel="noreferrer"
            className={`${styles.link}`}
          >
            @{props.info.publisherHandle}
          </a>
        </div>

        <div className={styles.counters}>
          <div className={styles.counter}>
            <Icon className={styles.counterIcon} name="views" />
            <span>{props.counters.viewCount.toLocaleString()}</span>
          </div>

          {props.category === "plugins" ? (
            <div className={styles.counter}>
              <Icon className={styles.counterIcon} name="installs" />
              <span>{props.counters.installCount.toLocaleString()}</span>
            </div>
          ) : (
            <div className={styles.counter}>
              <Icon className={styles.counterIcon} name="duplicates" />
              <span>{props.counters.duplicateCount.toLocaleString()}</span>
            </div>
          )}

          <div className={styles.counter}>
            <Icon className={styles.counterIcon} name="likes" />
            <span>{props.counters.likeCount.toLocaleString()}</span>
          </div>
          <div className={styles.counter}>
            <Icon className={styles.counterIcon} name="comments" />
            <span>{props.counters.commentCount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

InfoBox.defaultProps = {
  className: "",
} as Partial<Props>;

export default InfoBox;
