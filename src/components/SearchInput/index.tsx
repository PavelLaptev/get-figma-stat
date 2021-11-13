import * as React from "react";
import styles from "./styles.module.scss";
import Icon from "../../components/Icon";

interface Props {
  className?: string;
  placeholder?: string;
  value?: string;
  isError?: boolean;
  onSubmit: (value: string) => void;
  onClear: () => void;
  onChange: (value: string) => void;
}

const SearchInput: React.FunctionComponent<Props> = (props) => {
  const [story, setStory] = React.useState(0);
  const [val, setVal] = React.useState(props.value || "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    props.onChange(val);
  };

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.isError) {
      console.log("error");
      setStory(story + 1);
    }
    props.onSubmit(val);
  };

  const onClear = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onClear();
    setVal("");
  };

  return (
    <section className={styles.wrap} key={story}>
      <form
        className={`${styles.form} ${props.className} ${
          props.isError ? styles.errorInput : ""
        }`}
      >
        <input
          type="text"
          value={val}
          onChange={onChange}
          placeholder={props.placeholder}
          className={styles.input}
        />
        <button
          className={`${styles.button} ${styles.cross} ${
            val !== "" ? "" : styles.hidden
          }`}
          disabled={val === "" ? true : false}
          onClick={onClear}
        >
          <Icon name="cross" />
        </button>
        <button
          className={`${styles.button}`}
          disabled={val === "" ? true : false}
          onClick={onSubmit}
        >
          <Icon name="enter" />
        </button>
      </form>
      {props.isError ? (
        <div className={styles.errorMessage}>
          Oops! Can't find it. Check the ID or the category.
        </div>
      ) : null}
    </section>
  );
};

SearchInput.defaultProps = {
  placeholder: "Plugin ID",
  className: "",
} as Partial<Props>;

export default SearchInput;
