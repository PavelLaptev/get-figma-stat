import * as React from "react";
import CommonCard from "../CommonCard";
import ListItem from "../ListItem";
import ListFigmaItem from "../ListFigmaItem";
import Button from "../Button";

import styles from "./styles.module.scss";

interface Props {
  category: string;
  className?: string;
}

const StatBox: React.FunctionComponent<Props> = (props) => {
  const [pluginsData, setPluginsData] = React.useState<any>();
  const [pluginTopsAmount, setPluginTopsAmount] = React.useState<{
    installs: number;
    views: number;
    likes: number;
    comments: number;
  }>({
    installs: 5,
    views: 5,
    likes: 5,
    comments: 5,
  });

  const [filesData, setFilesData] = React.useState<any>();

  ///////////////////////////////////////////////

  React.useEffect(() => {
    try {
      fetch(`https://pavellaptev.github.io/figma-stat/plugins/common.json`)
        .then((response) => response.json())
        .then((pluginsData) => {
          console.log(pluginsData);
          setPluginsData(pluginsData);
        });

      fetch(`https://pavellaptev.github.io/figma-stat/hub_files/common.json`)
        .then((response) => response.json())
        .then((filesData) => {
          console.log(filesData);
          setFilesData(filesData);
        });
    } catch (error) {
      console.error(`Oops! Can't fetch plugins`);
    }
  }, []);

  ///////////////////////////////////////////////

  const LoadingComponent = () => {
    return (
      <div className={styles.loading}>
        <div className={styles.loading__text}>Loading...</div>
      </div>
    );
  };

  const PluginsCards = () => {
    if (pluginsData && filesData) {
      return (
        <>
          <CommonCard
            title={`${pluginsData.totalAmount.plugins.toLocaleString()} plugins`}
          >
            <div className={styles.total}>
              <ListItem
                label="Installs"
                value={pluginsData.totalAmount.installs.toLocaleString()}
              />
              <ListItem
                label="Views"
                value={pluginsData.totalAmount.views.toLocaleString()}
              />
              <ListItem
                label="Likes"
                value={pluginsData.totalAmount.likes.toLocaleString()}
              />
              <ListItem
                label="Comments"
                value={pluginsData.totalAmount.comments.toLocaleString()}
              />
            </div>
          </CommonCard>

          <CommonCard title={`Top by installs`}>
            <div className={styles.commonList}>
              {pluginsData.topInstalls
                .slice(0, pluginTopsAmount.installs)
                .map((plugin: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      imgLink={plugin.icon}
                      icon="installs"
                      label={{
                        name: plugin.name,
                        link: `plugin.link`,
                      }}
                      caption={{
                        name: plugin.publisherName,
                        link: `https://www.figma.com/@${plugin.publisherName}`,
                      }}
                      count={plugin.installs.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"secondary"}
              className={styles.showMore}
              disabled={pluginTopsAmount.installs === 40}
              onClick={() =>
                setPluginTopsAmount((prevState) => ({
                  ...prevState,
                  installs: pluginTopsAmount.installs + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Top by Likes`}>
            <div className={styles.commonList}>
              {pluginsData.topLikes
                .slice(0, pluginTopsAmount.likes)
                .map((plugin: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      imgLink={plugin.icon}
                      icon="likes"
                      label={{
                        name: plugin.name,
                        link: `plugin.link`,
                      }}
                      caption={{
                        name: plugin.publisherName,
                        link: `https://www.figma.com/@${plugin.publisherName}`,
                      }}
                      count={plugin.likes.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"secondary"}
              className={styles.showMore}
              disabled={pluginTopsAmount.likes === 40}
              onClick={() =>
                setPluginTopsAmount((prevState) => ({
                  ...prevState,
                  likes: pluginTopsAmount.likes + 5,
                }))
              }
            />
          </CommonCard>
        </>
      );
    } else {
      return <LoadingComponent />;
    }
  };

  const FilesCards = () => {
    if (pluginsData && filesData) {
      return (
        <CommonCard
          title={`${filesData.totalAmount.files.toLocaleString()} files`}
        >
          <div className={styles.total}>
            <ListItem
              label="duplicates"
              value={filesData.totalAmount.duplicates.toLocaleString()}
            />
            <ListItem
              label="Views"
              value={filesData.totalAmount.views.toLocaleString()}
            />
            <ListItem
              label="Likes"
              value={filesData.totalAmount.likes.toLocaleString()}
            />
            <ListItem
              label="Comments"
              value={filesData.totalAmount.comments.toLocaleString()}
            />
          </div>
        </CommonCard>
      );
    } else {
      return <LoadingComponent />;
    }
  };

  return (
    <section className={`${styles.wrap} ${props.className}`}>
      {props.category === "plugins" ? <PluginsCards /> : <FilesCards />}
    </section>
  );
};

StatBox.defaultProps = {
  className: "",
} as Partial<Props>;

export default StatBox;
