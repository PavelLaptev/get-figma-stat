import * as React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  onClick: (val: boolean) => void;
}

const SearchSwitcher: React.FunctionComponent<Props> = (props) => {
  const [toggle, setToggle] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setToggle(!toggle);
    props.onClick(toggle);
  };

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <Button
        text="Plugins"
        onClick={handleClick}
        mode={!toggle ? "secondary" : "primary"}
        className={toggle ? styles.skewLeft : ""}
      />
      <Button
        text="Files"
        onClick={handleClick}
        mode={toggle ? "secondary" : "primary"}
        className={!toggle ? styles.skewRight : ""}
      />
    </div>
  );
};

SearchSwitcher.defaultProps = {
  className: "",
} as Partial<Props>;

export default SearchSwitcher;
