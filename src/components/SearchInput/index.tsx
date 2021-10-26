import * as React from "react";
import styles from "./styles.module.scss";
import Icon from "../../components/Icon";

interface Props {
  placeholder?: string;
  onSubmit: (value: string) => void;
}

const SearchInput: React.FunctionComponent<Props> = (props) => {
  const [val, setVal] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onSubmit(val);
  };

  return (
    <form className={styles.wrap}>
      <input
        type="text"
        value={val}
        onChange={onChange}
        placeholder={props.placeholder}
        className={styles.input}
      />
      <button
        className={styles.button}
        disabled={val === "" ? true : false}
        onClick={onSubmit}
      >
        <Icon name="arrow" />
      </button>
    </form>
  );
};

SearchInput.defaultProps = {
  placeholder: "Plugin ID",
} as Partial<Props>;

export default SearchInput;
