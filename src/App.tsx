import React from "react";
import Chart from "./components/Chart";
import SearchInput from "./components/SearchInput";
import InfoBox from "./components/InfoBox";
import Icon from "./components/Icon";
import StatBox from "./components/StatBox";

import styles from "./app.module.scss";

const App = () => {
  const [idState, setIdState] = React.useState("");
  const [categoryState, setCategoryState] = React.useState("plugins");

  const [latestCountersState, setLatestCountersState] = React.useState(
    null as any
  );
  const [allCountersState, setAllCountersState] = React.useState(null as any);
  const [infoState, setInfoState] = React.useState(null as any);

  const [errorState, setErrorState] = React.useState(false);

  /////////////////////////////////////////////

  const handleSubmit = (value: string) => {
    if (value.includes("figma.com/community")) {
      setErrorState(false);

      const cuttedLink = value
        .split("community")[1]
        .split("/")
        .filter((item) => item);

      if (cuttedLink[0] === "plugin") {
        setCategoryState("plugins");
      }
      if (cuttedLink[0] === "widget") {
        setCategoryState("widgets");
      }
      if (cuttedLink[0] === "file") {
        setCategoryState("hub_files");
      }

      setIdState(cuttedLink[1]);
    } else {
      setErrorState(true);
    }
  };

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
                    [category === "plugins" || category === "widgets"
                      ? "installs"
                      : "duplicates"]:
                      category === "plugins" || category === "widgets"
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

    return <StatBox />;
  };

  /////////////////////////////////////////////

  React.useEffect(() => {
    if (idState !== "") {
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
        <h1>Figma Charts</h1>
        <SearchInput
          isError={errorState}
          onSubmit={(value) => {
            handleSubmit(value);
          }}
          onClear={() => {
            setErrorState(false);
            setAllCountersState("");
            setIdState("");
          }}
        />
        {Bars()}

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Every day at 6 am (UTC timezone) the GitHub script captures all
            available Figma plugins, files and widgets data. All information is
            stored in a separate{" "}
            <a
              className={styles.footerLink}
              href="https://github.com/PavelLaptev/figma-stat/tree/gh-pages"
              rel="noreferrer"
              target="_blank"
            >
              GitHub branch
            </a>{" "}
            and divided into three folders —{" "}
            <a
              className={styles.footerLink}
              href="https://github.com/PavelLaptev/figma-stat/tree/gh-pages/plugins"
              rel="noreferrer"
              target="_blank"
            >
              plugins
            </a>
            ,{" "}
            <a
              className={styles.footerLink}
              href="https://github.com/PavelLaptev/figma-stat/tree/gh-pages/hub_files"
              rel="noreferrer"
              target="_blank"
            >
              hub_files
            </a>{" "}
            and{" "}
            <a
              className={styles.footerLink}
              href="https://github.com/PavelLaptev/figma-stat/tree/gh-pages/widgets"
              rel="noreferrer"
              target="_blank"
            >
              widgets
            </a>
            .
          </p>
          <p className={styles.footerText}>
            You can read more about and how to use these stats in{" "}
            <a
              className={styles.footerLink}
              href="https://github.com/PavelLaptev/figma-stat"
              rel="noreferrer"
              target="_blank"
            >
              the main branch of the repository
            </a>
            .
          </p>
        </footer>
      </section>
    </main>
  );
};

export default App;
