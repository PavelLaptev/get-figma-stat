import * as React from "react";
import TextLink from "../TextLink";
import CodeBlock from "../CodeBlock";

import styles from "./styles.module.scss";

interface Props {
  id: string;
  links: LinksTypes;
  category: "plugins" | "hub_files";
}

const HowTo: React.FunctionComponent<Props> = (props) => {
  const code = `  // HOW TO FETCH YOUR DATA
  
  // Links to files
  const fetchLinks = {
    info: \`https://pavellaptev.github.io/figma-stat/${props.category}/${props.id}/info.json\`,
    counters: \`https://pavellaptev.github.io/figma-stat/${props.category}/${props.id}/counters.json\`,
    latest: \`https://pavellaptev.github.io/figma-stat/${props.category}/${props.id}/latest.json\`,
    change: \`https://pavellaptev.github.io/figma-stat/${props.category}/${props.id}/change.json\`
  };
  
  // Fetch certain data
  const getCounters = async () => {
    await fetch(fetchLink.counters)
      .then((response) => response.json())
      .then((counter) => {
        console.log(counter);
      });
  };

  getCounters();

  // Loop through all links
  const getAllData = (links) => {
    Object.values(links).forEach(async (link, i) => {
      await fetch(link)
        .then((response) => response.json())
        .then((data) => {
          let fetchedData = { [Object.keys(links)[i]]: data };
          console.log(fetchedData);
        });
    });
  };

  getAllData(fetchLink);`;

  return (
    <section className={styles.wrap}>
      <h3>How it works</h3>
      <p>
        Everyday at 6 am (UTC timezone) the github script captures all avalible
        Figma plugins and files.
        <br />
        All information is stored in a separate{" "}
        <TextLink href="https://github.com/PavelLaptev/figma-stat/tree/gh-pages">
          github branch
        </TextLink>{" "}
        and divided into two folders —{" "}
        <TextLink href="https://github.com/PavelLaptev/figma-stat/tree/gh-pages/plugins">
          plugins
        </TextLink>{" "}
        and{" "}
        <TextLink href="https://github.com/PavelLaptev/figma-stat/tree/gh-pages/hub_files">
          hub_files
        </TextLink>
        .
      </p>
      <p>
        All data about your {props.category} also stored in a{" "}
        <TextLink
          href={`https://github.com/PavelLaptev/figma-stat/tree/gh-pages/${props.category}/${props.id}`}
        >
          separate folder
        </TextLink>
        .
      </p>
      <p>
        Each folder contains{" "}
        <TextLink href={props.links.info}>info.json</TextLink>,{" "}
        <TextLink href={props.links.counters}>counters.json</TextLink>,{" "}
        <TextLink href={props.links.latest}>latest.json</TextLink> and{" "}
        <TextLink href={props.links.change}>change.json</TextLink>.
      </p>

      <CodeBlock>{code}</CodeBlock>
    </section>
  );
};

HowTo.defaultProps = {} as Partial<Props>;

export default HowTo;
