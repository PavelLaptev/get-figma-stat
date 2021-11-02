import React from "react";
import Chart from "./components/Chart";
import SearchSwitcher from "./components/SearchSwitcher";
import SearchInput from "./components/SearchInput";
import TotalCount from "./components/TotalCount";
import InfoBox from "./components/InfoBox";
import Icon from "./components/Icon";
import HowTo from "./components/HowTo";

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

const fetchData = async (id: string, category: string) => {
  const link = {
    info: `https://pavellaptev.github.io/figma-stat/${category}/${id}/info.json`,
    counters: `https://pavellaptev.github.io/figma-stat/${category}/${id}/counters.json`,
    latest: `https://pavellaptev.github.io/figma-stat/${category}/${id}/latest.json`,
    change: `https://pavellaptev.github.io/figma-stat/${category}/${id}/change.json`,
  };

  console.log(link);
};

const App = () => {
  const [idState, setIdState] = React.useState(
    getQuery("id") !== "" ? getQuery("id") : ""
  );
  const [categoryState, setCategoryState] = React.useState(
    getQuery("category") !== "" ? getQuery("category") : "plugins"
  );

  /////////////////////////////////////////////

  React.useEffect(() => {
    setQuery("id", idState);
    setQuery("category", categoryState);

    if (idState !== "" && categoryState !== "") {
      console.log(idState, categoryState);
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
      </section>
    </main>
  );
};

export default App;
