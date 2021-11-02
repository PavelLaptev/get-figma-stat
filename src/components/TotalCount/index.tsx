import * as React from "react";
import numToString from "../../utils/numToString";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  category: string;
}

interface CountItemProps {
  label: string;
  value: string;
}

const CountItem: React.FunctionComponent<CountItemProps> = (props) => {
  return (
    <div className={styles.countItem}>
      <span>{props.label}</span>
      <p>{props.value}</p>
    </div>
  );
};

const TotalCount: React.FunctionComponent<Props> = (props) => {
  const [totalData, setTotalData] = React.useState({} as any);

  React.useEffect(() => {
    let isMounted = true;

    fetch(
      `https://pavellaptev.github.io/figma-stat/${props.category}/total.json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          console.log(data);
          setTotalData(data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [props.category]);

  return (
    <>
      {props.category === "plugins" ? (
        <section className={`${styles.wrap} ${props.className}`}>
          <CountItem label={"Total:"} value={numToString(totalData.plugins)} />
          <CountItem
            label={"Installs:"}
            value={numToString(totalData.installCount)}
          />
          <CountItem
            label={"Likes:"}
            value={numToString(totalData.likeCount)}
          />
          <CountItem
            label={"Views:"}
            value={numToString(totalData.viewCount)}
          />
          <CountItem
            label={"Comments:"}
            value={numToString(totalData.commentCount)}
          />
        </section>
      ) : (
        <section className={`${styles.wrap} ${props.className}`}>
          <CountItem label={"Total:"} value={numToString(totalData.files)} />
          <CountItem
            label={"Duplicates:"}
            value={numToString(totalData.duplicateCount)}
          />
          <CountItem
            label={"Likes:"}
            value={numToString(totalData.likeCount)}
          />
          <CountItem
            label={"Views:"}
            value={numToString(totalData.viewCount)}
          />
          <CountItem
            label={"Comments:"}
            value={numToString(totalData.commentCount)}
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
