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
        text="Plugins"
        onClick={handleClick}
        mode={categoryState === "plugins" ? "secondary" : "primary"}
        className={`${styles.button} ${
          categoryState !== "plugins" ? styles.skewLeft : ""
        }`}
      />
      <Button
        text="Hub files"
        onClick={handleClick}
        mode={categoryState !== "plugins" ? "secondary" : "primary"}
        className={`${styles.button} ${
          categoryState === "plugins" ? styles.skewRight : ""
        }`}
      />
    </div>
  );
};

SearchSwitcher.defaultProps = {
  className: "",
} as Partial<Props>;

export default SearchSwitcher;
