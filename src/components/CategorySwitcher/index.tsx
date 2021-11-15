import * as React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  onClick: (val: string) => void;
}

const CategorySwitcher: React.FunctionComponent<Props> = (props) => {
  const [categoryState, setCategoryState] = React.useState("plugins");

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
        mode={categoryState === "plugins" ? "secondary" : "ghost"}
        className={`${styles.button} ${
          categoryState === "plugins" ? styles.inactive : ""
        }`}
      />
      <Button
        label="Widgets"
        onClick={handleClick}
        mode={categoryState === "widgets" ? "secondary" : "ghost"}
        className={`${styles.button} ${
          categoryState === "widgets" ? styles.inactive : ""
        }`}
      />
      <Button
        label="Hub Files"
        onClick={handleClick}
        mode={categoryState === "hub_files" ? "secondary" : "ghost"}
        className={`${styles.button} ${
          categoryState === "hub_files" ? styles.inactive : ""
        }`}
      />
    </div>
  );
};

CategorySwitcher.defaultProps = {
  className: "",
} as Partial<Props>;

export default CategorySwitcher;
