import React from "react";
import Chart from "./components/Chart";
import SearchSwitcher from "./components/SearchSwitcher";
import SearchInput from "./components/SearchInput";
import TotalCount from "./components/TotalCount";
import InfoBox from "./components/InfoBox";
import Icon from "./components/Icon";

import styles from "./app.module.scss";

const getQuery = (string: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(string) || "";
};

const setQuery = (query: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(query, value);
  window.history.pushState(null, "", `?${searchParams.toString()}`);
};

const App = () => {
  const [idState, setIdState] = React.useState(
    getQuery("id") !== "" ? getQuery("id") : ""
  );
  const [categoryState, setCategoryState] = React.useState(
    getQuery("category") !== "" ? getQuery("category") : "plugins"
  );

  const [latestCountersState, setLatestCountersState] = React.useState(
    null as any
  );
  const [allCountersState, setAllCountersState] = React.useState(null as any);
  const [infoState, setInfoState] = React.useState(null as any);

  /////////////////////////////////////////////

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

  const Bars = () => {
    if (allCountersState && infoState) {
      return (
        <>
          <InfoBox
            counters={latestCountersState}
            info={infoState}
            category={categoryState}
          />
          <Chart data={allCountersState} category={categoryState} />
        </>
      );
    }
  };

  /////////////////////////////////////////////

  React.useEffect(() => {
    setQuery("id", idState);
    setQuery("category", categoryState);

    if (idState !== "" && categoryState !== "") {
      fetchData(idState, categoryState);
    }
  }, [idState, categoryState]);

  /////////////////////////////////////////////

  return (
    <main className={`${styles.main} lightTheme`}>
      <a
        className={styles.ghButton}
        href="https://github.com/PavelLaptev/figma-stat"
        rel="noreferrer"
        target="_blank"
      >
        <Icon name="gh" />
      </a>

      <section className={styles.wrap}>
        <h1>Figma Statistics</h1>
        <SearchSwitcher
          value={categoryState}
          onClick={(value) => {
            setCategoryState(value);
          }}
        />
        <SearchInput
          value={idState}
          isErroor={false}
          placeholder={categoryState === "plugins" ? "Plugin ID" : "File ID"}
          onSubmit={(value) => {
            setIdState(value);
          }}
          onChange={() => {}}
        />
        {!allCountersState ? <TotalCount category={categoryState} /> : null}
        {Bars()}
      </section>
    </main>
  );
};

export default App;
