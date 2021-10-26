import React from "react";
import Chart from "./components/Chart";
import SearchSwitcher from "./components/SearchSwitcher";
import SearchInput from "./components/SearchInput";
import TotalCount from "./components/TotalCount";

import styles from "./app.module.scss";

const App = () => {
  const [pluginCategory, setPluginCategory] = React.useState(true);
  const [fetchedData, setFetchedData] = React.useState(null as any);

  const handleFetchData = async (id: string) => {
    const link = {
      plugin: `https://pavellaptev.github.io/figma-stat/plugins/${id}/counters.json`,
      file: `https://pavellaptev.github.io/figma-stat/hub_files/${id}/counters.json`,
    };

    try {
      await fetch(pluginCategory ? link.plugin : link.file)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);

          const clearDataItem = (itemName: string, title: string) => {
            return data
              .map((item: any, i: any) => {
                if (data[i - 1]) {
                  return {
                    date: item.date,
                    [title]: item[itemName] - data[i - 1][itemName],
                  };
                } else {
                  return {
                    date: item.date,
                    [title]: item[itemName] - item[itemName],
                  };
                }
              })
              .splice(1);
          };

          const newData = {
            Installs: clearDataItem("installCount", "Installs"),
            Views: clearDataItem("viewCount", "Views"),
            Likes: clearDataItem("likeCount", "Likes"),
            Comments: clearDataItem("commentCount", "Comments"),
          };

          console.log(newData);

          setFetchedData(newData);
        });
    } catch (error) {
      console.error(
        `Oops! Seems like there is no ${
          pluginCategory ? "plugin" : "file"
        } with this ID yet`
      );
    }
  };

  const Bars = () => {
    if (fetchedData) {
      return (
        <>
          <section>hello</section>
          {Object.keys(fetchedData).map((name, i) => (
            <Chart key={i} bar={name} title={name} data={fetchedData[name]} />
          ))}
        </>
      );
    }
  };

  return (
    <main className={`${styles.main} ${styles.lightTheme}`}>
      <section className={styles.wrap}>
        <h1>Figma Statistics</h1>
        <SearchSwitcher onClick={(val) => setPluginCategory(val)} />
        <SearchInput
          placeholder={pluginCategory ? "Plugin ID" : "File ID"}
          onSubmit={handleFetchData}
        />
        {Bars()}
        {!fetchedData ? <TotalCount category={pluginCategory} /> : null}
      </section>
    </main>
  );
};

export default App;
