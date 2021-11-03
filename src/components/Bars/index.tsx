import * as React from "react";
import InfoBox from "../InfoBox";
import Chart from "../Chart";

import styles from "./styles.module.scss";

interface Props {
  id: string;
  category: string;
}

const HowTo: React.FunctionComponent<Props> = (props) => {
  const [latestCountersState, setLatestCountersState] = React.useState(
    null as any
  );
  const [allCountersState, setAllCountersState] = React.useState(null as any);
  const [infoState, setInfoState] = React.useState(null as any);

  const fetchData = async (id: string, category: string) => {
    const link = {
      info: `https://pavellaptev.github.io/figma-stat/${category}/${id}/info.json`,
      counters: `https://pavellaptev.github.io/figma-stat/${category}/${id}/counters.json`,
      latest: `https://pavellaptev.github.io/figma-stat/${category}/${id}/latest.json`,
      change: `https://pavellaptev.github.io/figma-stat/${category}/${id}/change.json`,
    };

    try {
      await fetch(link.counters)
        .then((response) => response.json())
        .then((data) => {
          const clearDataItem = () => {
            return data
              .map((item: any, i: any) => {
                if (data[i - 1]) {
                  return {
                    date: item.date,
                    [category === "plugins" ? "installs" : "duplicates"]:
                      category === "plugins"
                        ? item["installCount"] - data[i - 1]["installCount"]
                        : item["duplicateCount"] -
                          data[i - 1]["duplicateCount"],
                    views: item["viewCount"] - data[i - 1]["viewCount"],
                    likes: item["likeCount"] - data[i - 1]["likeCount"],
                    comments:
                      item["commentCount"] - data[i - 1]["commentCount"],
                  };
                }
                return null;
              })
              .splice(1);
          };

          setLatestCountersState(data.slice(-1)[0]);
          setAllCountersState(clearDataItem());

          console.log(clearDataItem());
        });

      await fetch(link.info)
        .then((response) => response.json())
        .then((data) => {
          setInfoState(data);
        });
    } catch (error) {
      console.error(`Oops! Seems like there is no file with this ID yet`);
    }
  };

  ////////////////////////////////////////

  React.useEffect(() => {
    fetchData(props.id, props.category);
  }, [props.id, props.category]);

  ////////////////////////////////////////

  return (
    <section className={styles.wrap}>
      <InfoBox
        counters={latestCountersState}
        info={infoState}
        category={props.category}
      />
      <Chart data={allCountersState} category={props.category} />
    </section>
  );
};

HowTo.defaultProps = {} as Partial<Props>;

export default HowTo;
