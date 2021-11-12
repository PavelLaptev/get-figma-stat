import React from "react";
import Chart from "./components/Chart";
import SearchSwitcher from "./components/SearchSwitcher";
import SearchInput from "./components/SearchInput";
import InfoBox from "./components/InfoBox";
import Icon from "./components/Icon";
import StatBox from "./components/StatBox";

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

  const [triggerSearch, setTriggerSearch] = React.useState(false);

  const [errorState, setErrorState] = React.useState(false);

  /////////////////////////////////////////////

  const fetchData = async (id: string, category: string) => {
    const link = {
      info: `https://pavellaptev.github.io/figma-stat/${category}/${id}/info.json`,
      counters: `https://pavellaptev.github.io/figma-stat/${category}/${id}/counters.json`,
    };

    try {
      await fetch(link.counters)
        .then((response) => response.json())
        .then((data) => {
          setErrorState(false);

          const clearDataItem = () => {
            return data
              .map((item: any, i: any) => {
                if (data[i - 1]) {
                  return {
                    date: item.date.split("-").reverse().join("."),
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
      setErrorState(true);
      console.error(`Oops! Seems like there is no file with this ID yet`);
    }
  };

  const Bars = () => {
    if (allCountersState && infoState) {
      return (
        <section className={styles.statBlock}>
          <InfoBox
            counters={latestCountersState}
            info={infoState}
            category={categoryState}
          />
          <Chart data={allCountersState} category={categoryState} />
        </section>
      );
    }

    return <StatBox category={categoryState} />;
  };

  /////////////////////////////////////////////

  React.useEffect(() => {
    setQuery("id", idState);
    setQuery("category", categoryState);

    if (getQuery("id") !== "" && getQuery("category") !== "") {
      console.log("fetching data …");
      fetchData(idState, categoryState);
    }
  }, [idState, categoryState, triggerSearch]);

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
        <h1>Figma Charts</h1>
        <SearchSwitcher
          value={categoryState}
          onClick={(value) => {
            setAllCountersState("");
            setCategoryState(value);
          }}
        />
        <SearchInput
          value={idState}
          isError={errorState}
          placeholder={
            categoryState === "plugins"
              ? "Find by plugin ID"
              : "Find by file ID"
          }
          onSubmit={(value) => {
            setIdState(value);
            setTriggerSearch(!triggerSearch);
          }}
          onChange={() => {}}
        />
        {Bars()}
      </section>
    </main>
  );
};

export default App;