import * as React from "react";
import numToString from "../../utils/numToString";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  category: "plugins" | "hub_files";
}

interface CountItemProps {
  label: string;
  value: string;
}

interface TotalPluginsProps {
  commentCount: number;
  installCount: number;
  likeCount: number;
  plugins: number;
  viewCount: number;
}

interface TotalFilesProps {
  commentCount: number;
  duplicateCount: number;
  likeCount: number;
  files: number;
  viewCount: number;
}

const CountItem: React.FunctionComponent<CountItemProps> = (props) => {
  return (
    <div className={styles.countItem}>
      <span>{props.label}</span>
      <p>{props.value}</p>
    </div>
  );
};

const links = {
  plugins: "https://pavellaptev.github.io/figma-stat/plugins/total.json",
  files: "https://pavellaptev.github.io/figma-stat/hub_files/total.json",
};

const TotalCount: React.FunctionComponent<Props> = (props) => {
  const [pluginsData, setPluginsData] = React.useState({} as TotalPluginsProps);
  const [filesData, setFilesData] = React.useState({} as TotalFilesProps);

  React.useEffect(() => {
    fetch(links.plugins)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPluginsData(data);
      });

    fetch(links.files)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFilesData(data);
      });
  }, []);

  return (
    <>
      {props.category === "plugins" ? (
        <section className={`${styles.wrap} ${props.className}`}>
          <CountItem
            label={"Total:"}
            value={numToString(pluginsData.plugins)}
          />
          <CountItem
            label={"Installs:"}
            value={numToString(pluginsData.installCount)}
          />
          <CountItem
            label={"Likes:"}
            value={numToString(pluginsData.likeCount)}
          />
          <CountItem
            label={"Views:"}
            value={numToString(pluginsData.viewCount)}
          />
          <CountItem
            label={"Comments:"}
            value={numToString(pluginsData.commentCount)}
          />
        </section>
      ) : (
        <section className={`${styles.wrap} ${props.className}`}>
          <CountItem label={"Total:"} value={numToString(filesData.files)} />
          <CountItem
            label={"Duplicates:"}
            value={numToString(filesData.duplicateCount)}
          />
          <CountItem
            label={"Likes:"}
            value={numToString(filesData.likeCount)}
          />
          <CountItem
            label={"Views:"}
            value={numToString(filesData.viewCount)}
          />
          <CountItem
            label={"Comments:"}
            value={numToString(filesData.commentCount)}
          />
        </section>
      )}
    </>
  );
};

TotalCount.defaultProps = {
  className: "",
} as Partial<Props>;

export default TotalCount;
