import * as React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

interface Props {
  value: string;
  className?: string;
  onClick: (val: string) => void;
}

const SearchSwitcher: React.FunctionComponent<Props> = (props) => {
  const [categoryState, setCategoryState] = React.useState(props.value);

  const handleClick = (text: string) => {
    const value = text.toLowerCase().replace(/\s+/g, "_");
    setCategoryState(value);
    props.onClick(value);
  };

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <Button
        label="Plugins"
        onClick={handleClick}
        mode={categoryState !== "plugins" ? "ghost" : "secondary"}
        className={`${styles.button} ${
          categoryState === "plugins" ? styles.inactive : ""
        }`}
      />
      <Button
        label="Hub Files"
        onClick={handleClick}
        mode={categoryState !== "plugins" ? "secondary" : "ghost"}
        className={`${styles.button} ${
          categoryState !== "plugins" ? styles.inactive : ""
        }`}
      />
    </div>
  );
};

SearchSwitcher.defaultProps = {
  className: "",
} as Partial<Props>;

export default SearchSwitcher;
