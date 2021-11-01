import React from "react";
import Chart from "./components/Chart";
import SearchSwitcher from "./components/SearchSwitcher";
import SearchInput from "./components/SearchInput";
import TotalCount from "./components/TotalCount";
import InfoBox from "./components/InfoBox";
import Icon from "./components/Icon";
import HowTo from "./components/HowTo";

import styles from "./app.module.scss";

const App = () => {
  const [idState, setIdState] = React.useState("");
  const [errorState, setErrorState] = React.useState(false);
  const [linkState, setLinkState] = React.useState({} as LinksTypes);
  const [categoryState, setCategoryState] = React.useState(
    "plugins" as "plugins" | "hub_files"
  );
  const [fetchedCountersData, setFetchedCountersData] = React.useState(
    null as any
  );
  const [latestCounters, setLatestCounters] = React.useState(null as any);
  const [fetchedInfoData, setFetchedInfoData] = React.useState(null as any);

  /////////////////////////////////////////////

  React.useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const category = params.get("category");
    const id = params.get("id");
  }, [idState]);

  /////////////////////////////////////////////

  const handleFetchData = async (id: string) => {
    if ("URLSearchParams" in window) {
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("category", categoryState);
      searchParams.set("id", id);
      var newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      window.history.pushState(null, "", newRelativePathQuery);
    }

    const link = {
      info: `https://pavellaptev.github.io/figma-stat/${categoryState}/${id}/info.json`,
      counters: `https://pavellaptev.github.io/figma-stat/${categoryState}/${id}/counters.json`,
      latest: `https://pavellaptev.github.io/figma-stat/${categoryState}/${id}/latest.json`,
      change: `https://pavellaptev.github.io/figma-stat/${categoryState}/${id}/change.json`,
    };

    setLinkState(link);
    setIdState(id);

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
                    [categoryState === "plugins" ? "installs" : "duplicates"]:
                      categoryState === "plugins"
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

          setLatestCounters(data.slice(-1)[0]);
          setFetchedCountersData(clearDataItem());
        });

      await fetch(link.info)
        .then((response) => response.json())
        .then((data) => {
          setFetchedInfoData(data);
        });
    } catch (error) {
      setErrorState(true);
      console.error(
        `Oops! Seems like there is no file with this ID yet in ${categoryState}`
      );
    }
  };

  const Bars = () => {
    if (fetchedCountersData && fetchedInfoData) {
      return (
        <>
          <InfoBox
            counters={latestCounters}
            info={fetchedInfoData}
            category={categoryState}
          />
          <Chart data={fetchedCountersData} category={categoryState} />
          <HowTo id={idState} links={linkState} category={categoryState} />
        </>
      );
    }
  };

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
          onClick={(val) => {
            setFetchedCountersData(null);
            setErrorState(false);
            val ? setCategoryState("plugins") : setCategoryState("hub_files");
          }}
        />
        <SearchInput
          isErroor={errorState}
          placeholder={categoryState === "plugins" ? "Plugin ID" : "File ID"}
          onSubmit={handleFetchData}
          onChange={() => setErrorState(false)}
        />
        {Bars()}
        {!fetchedCountersData ? <TotalCount category={categoryState} /> : null}
      </section>
    </main>
  );
};

export default App;