import * as React from "react";
import CommonCard from "../CommonCard";
import CategorySwitcher from "../CategorySwitcher";
import ListItem from "../ListItem";
import ListFigmaItem from "../ListFigmaItem";
import Button from "../Button";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const StatBox: React.FunctionComponent<Props> = (props) => {
  const initialCategory = "plugins";
  const initialShowedItems = 5;
  const maxChartAmount = 50;

  const [categoryState, setCategoryState] = React.useState(initialCategory);

  const [pluginsData, setPluginsData] = React.useState<any>();
  const [pluginsTopsAmount, setPluginsTopsAmount] = React.useState<{
    installs: number;
    views: number;
    likes: number;
    comments: number;
    users: number;
  }>({
    installs: initialShowedItems,
    views: initialShowedItems,
    likes: initialShowedItems,
    comments: initialShowedItems,
    users: initialShowedItems,
  });

  const [widgetsData, setWidgetsData] = React.useState<any>();
  const [widgetsTopsAmount, setWidgetsTopsAmount] = React.useState<{
    installs: number;
    views: number;
    likes: number;
    comments: number;
    users: number;
  }>({
    installs: initialShowedItems,
    views: initialShowedItems,
    likes: initialShowedItems,
    comments: initialShowedItems,
    users: initialShowedItems,
  });

  const [filesData, setFilesData] = React.useState<any>();
  const [filesTopsAmount, setFilesTopsAmount] = React.useState<{
    duplicates: number;
    views: number;
    likes: number;
    comments: number;
    users: number;
  }>({
    duplicates: initialShowedItems,
    views: initialShowedItems,
    likes: initialShowedItems,
    comments: initialShowedItems,
    users: initialShowedItems,
  });

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

      fetch(`https://pavellaptev.github.io/figma-stat/widgets/common.json`)
        .then((response) => response.json())
        .then((widgetsData) => {
          console.log(widgetsData);
          setWidgetsData(widgetsData);
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
                icon="installs"
                value={pluginsData.totalAmount.installs.toLocaleString()}
              />
              <ListItem
                label="Views"
                icon="views"
                value={pluginsData.totalAmount.views.toLocaleString()}
              />
              <ListItem
                label="Likes"
                icon="likes"
                value={pluginsData.totalAmount.likes.toLocaleString()}
              />
              <ListItem
                label="Comments"
                icon="comments"
                value={pluginsData.totalAmount.comments.toLocaleString()}
              />
            </div>
          </CommonCard>

          <CommonCard title={`Top by installs`}>
            <div className={styles.commonList}>
              {pluginsData.topInstalls
                .slice(0, pluginsTopsAmount.installs)
                .map((plugin: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      imgLink={plugin.icon}
                      icon="installs"
                      label={{
                        name: plugin.name,
                        link: `https://www.figma.com/community/plugin/${plugin.id}`,
                      }}
                      caption={{
                        name: plugin.publisherName,
                        link: `https://www.figma.com/@${plugin.publisherHandle}`,
                      }}
                      count={plugin.installs.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={pluginsTopsAmount.installs === maxChartAmount}
              onClick={() =>
                setPluginsTopsAmount((prevState) => ({
                  ...prevState,
                  installs: pluginsTopsAmount.installs + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Top by likes`}>
            <div className={styles.commonList}>
              {pluginsData.topLikes
                .slice(0, pluginsTopsAmount.likes)
                .map((plugin: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      imgLink={plugin.icon}
                      icon="likes"
                      label={{
                        name: plugin.name,
                        link: `https://www.figma.com/community/plugin/${plugin.id}`,
                      }}
                      caption={{
                        name: plugin.publisherName,
                        link: `https://www.figma.com/@${plugin.publisherHandle}`,
                      }}
                      count={plugin.likes.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={pluginsTopsAmount.likes >= maxChartAmount}
              onClick={() =>
                setPluginsTopsAmount((prevState) => ({
                  ...prevState,
                  likes: pluginsTopsAmount.likes + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Top by comments`}>
            <div className={styles.commonList}>
              {pluginsData.topComments
                .slice(0, pluginsTopsAmount.comments)
                .map((plugin: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      imgLink={plugin.icon}
                      icon="comments"
                      label={{
                        name: plugin.name,
                        link: `https://www.figma.com/community/plugin/${plugin.id}`,
                      }}
                      caption={{
                        name: plugin.publisherName,
                        link: `https://www.figma.com/@${plugin.publisherHandle}`,
                      }}
                      count={plugin.comments.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={pluginsTopsAmount.comments >= maxChartAmount}
              onClick={() =>
                setPluginsTopsAmount((prevState) => ({
                  ...prevState,
                  comments: pluginsTopsAmount.comments + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Popular plugin makers`}>
            <div className={styles.commonList}>
              {pluginsData.topPopularUsers
                .slice(0, pluginsTopsAmount.users)
                .map((user: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      imgLink={user.publisherIcon}
                      icon="user"
                      label={{
                        name: user.name,
                        link: `https://www.figma.com/@${user.publisherHandle}`,
                      }}
                      count={user.followers.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={pluginsTopsAmount.users >= maxChartAmount}
              onClick={() =>
                setPluginsTopsAmount((prevState) => ({
                  ...prevState,
                  users: pluginsTopsAmount.users + 5,
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
        <>
          <CommonCard
            title={`${filesData.totalAmount.files.toLocaleString()} files`}
          >
            <div className={styles.total}>
              <ListItem
                label="duplicates"
                icon="duplicates"
                value={filesData.totalAmount.duplicates.toLocaleString()}
              />
              <ListItem
                label="Views"
                icon="views"
                value={filesData.totalAmount.views.toLocaleString()}
              />
              <ListItem
                label="Likes"
                icon="likes"
                value={filesData.totalAmount.likes.toLocaleString()}
              />
              <ListItem
                label="Comments"
                icon="comments"
                value={filesData.totalAmount.comments.toLocaleString()}
              />
            </div>
          </CommonCard>

          <CommonCard title={`Top by duplicates`}>
            <div className={styles.commonList}>
              {filesData.topDuplicates
                .slice(0, filesTopsAmount.duplicates)
                .map((file: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      icon="duplicates"
                      label={{
                        name: file.name,
                        link: `https://www.figma.com/community/file/${file.id}`,
                      }}
                      caption={{
                        name: file.publisherName,
                        link: `https://www.figma.com/@${file.publisherHandle}`,
                      }}
                      count={file.duplicates.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={filesTopsAmount.duplicates >= maxChartAmount}
              onClick={() =>
                setFilesTopsAmount((prevState) => ({
                  ...prevState,
                  duplicates: filesTopsAmount.duplicates + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Top by likes`}>
            <div className={styles.commonList}>
              {filesData.topLikes
                .slice(0, filesTopsAmount.likes)
                .map((file: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      icon="likes"
                      label={{
                        name: file.name,
                        link: `https://www.figma.com/community/file/${file.id}`,
                      }}
                      caption={{
                        name: file.publisherName,
                        link: `https://www.figma.com/@${file.publisherHandle}`,
                      }}
                      count={file.likes.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={filesTopsAmount.likes >= maxChartAmount}
              onClick={() =>
                setFilesTopsAmount((prevState) => ({
                  ...prevState,
                  likes: filesTopsAmount.likes + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Top by comments`}>
            <div className={styles.commonList}>
              {filesData.topComments
                .slice(0, filesTopsAmount.comments)
                .map((file: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      icon="comments"
                      label={{
                        name: file.name,
                        link: `https://www.figma.com/community/file/${file.id}`,
                      }}
                      caption={{
                        name: file.publisherName,
                        link: `https://www.figma.com/@${file.publisherHandle}`,
                      }}
                      count={file.comments.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={filesTopsAmount.comments >= maxChartAmount}
              onClick={() =>
                setFilesTopsAmount((prevState) => ({
                  ...prevState,
                  comments: filesTopsAmount.comments + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Popular file makers`}>
            <div className={styles.commonList}>
              {filesData.topPopularUsers
                .slice(0, filesTopsAmount.users)
                .map((user: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      imgLink={user.publisherIcon}
                      icon="user"
                      label={{
                        name: user.name,
                        link: `https://www.figma.com/@${user.publisherHandle}`,
                      }}
                      count={user.followers.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={filesTopsAmount.users >= maxChartAmount}
              onClick={() =>
                setFilesTopsAmount((prevState) => ({
                  ...prevState,
                  users: filesTopsAmount.users + 5,
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

  const WidgetsCards = () => {
    if (pluginsData && widgetsData) {
      return (
        <>
          <CommonCard
            title={`${widgetsData.totalAmount.widgets.toLocaleString()} widgets`}
          >
            <div className={styles.total}>
              <ListItem
                label="installs"
                icon="installs"
                value={widgetsData.totalAmount.installs.toLocaleString()}
              />
              <ListItem
                label="Views"
                icon="views"
                value={widgetsData.totalAmount.views.toLocaleString()}
              />
              <ListItem
                label="Likes"
                icon="likes"
                value={widgetsData.totalAmount.likes.toLocaleString()}
              />
              <ListItem
                label="Comments"
                icon="comments"
                value={widgetsData.totalAmount.comments.toLocaleString()}
              />
            </div>
          </CommonCard>

          <CommonCard title={`Top by installs`}>
            <div className={styles.commonList}>
              {widgetsData.topInstalls
                .slice(0, widgetsTopsAmount.installs)
                .map((file: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      icon="installs"
                      label={{
                        name: file.name,
                        link: `https://www.figma.com/community/widget/${file.id}`,
                      }}
                      caption={{
                        name: file.publisherName,
                        link: `https://www.figma.com/@${file.publisherHandle}`,
                      }}
                      count={file.installs.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={widgetsTopsAmount.installs >= maxChartAmount}
              onClick={() =>
                setWidgetsTopsAmount((prevState) => ({
                  ...prevState,
                  installs: widgetsTopsAmount.installs + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Top by likes`}>
            <div className={styles.commonList}>
              {widgetsData.topLikes
                .slice(0, widgetsTopsAmount.likes)
                .map((file: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      icon="likes"
                      label={{
                        name: file.name,
                        link: `https://www.figma.com/community/widget/${file.id}`,
                      }}
                      caption={{
                        name: file.publisherName,
                        link: `https://www.figma.com/@${file.publisherHandle}`,
                      }}
                      count={file.likes.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={widgetsTopsAmount.likes >= maxChartAmount}
              onClick={() =>
                setWidgetsTopsAmount((prevState) => ({
                  ...prevState,
                  likes: widgetsTopsAmount.likes + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Top by comments`}>
            <div className={styles.commonList}>
              {widgetsData.topComments
                .slice(0, widgetsTopsAmount.comments)
                .map((file: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      icon="comments"
                      label={{
                        name: file.name,
                        link: `https://www.figma.com/community/widget/${file.id}`,
                      }}
                      caption={{
                        name: file.publisherName,
                        link: `https://www.figma.com/@${file.publisherHandle}`,
                      }}
                      count={file.comments.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={widgetsTopsAmount.comments >= maxChartAmount}
              onClick={() =>
                setWidgetsTopsAmount((prevState) => ({
                  ...prevState,
                  comments: widgetsTopsAmount.comments + 5,
                }))
              }
            />
          </CommonCard>

          <CommonCard title={`Popular widgets makers`}>
            <div className={styles.commonList}>
              {widgetsData.topPopularUsers
                .slice(0, widgetsTopsAmount.users)
                .map((user: any, i: number) => {
                  return (
                    <ListFigmaItem
                      key={i}
                      index={i + 1}
                      imgLink={user.publisherIcon}
                      icon="user"
                      label={{
                        name: user.name,
                        link: `https://www.figma.com/@${user.publisherHandle}`,
                      }}
                      count={user.followers.toLocaleString()}
                    />
                  );
                })}
            </div>
            <Button
              label={"Show more"}
              mode={"primary"}
              className={styles.showMore}
              disabled={widgetsTopsAmount.users >= maxChartAmount}
              onClick={() =>
                setWidgetsTopsAmount((prevState) => ({
                  ...prevState,
                  users: widgetsTopsAmount.users + 5,
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

  const showData = () => {
    if (categoryState === "plugins") {
      return <PluginsCards />;
    }
    if (categoryState === "widgets") {
      return <WidgetsCards />;
    }
    if (categoryState === "hub_files") {
      return <FilesCards />;
    }
  };

  return (
    <>
      <CategorySwitcher
        onClick={(value) => {
          setCategoryState(value);
        }}
      />
      <section className={`${styles.wrap} ${props.className}`}>
        {showData()}
      </section>
    </>
  );
};

StatBox.defaultProps = {
  className: "",
} as Partial<Props>;

export default StatBox;
