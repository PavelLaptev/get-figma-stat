import * as React from "react";
import styles from "./styles.module.scss";
import Icon from "../../components/Icon";

interface Props {
  className?: string;
  isError?: boolean;
  onSubmit: (value: string) => void;
  onClear: () => void;
}

const SearchInput: React.FunctionComponent<Props> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [story, setStory] = React.useState(0);
  const [val, setVal] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const onSubmit = () => {
    if (props.isError) {
      console.log("error");
      setStory(story + 1);
    }
    props.onSubmit(val);
  };

  const onClear = (e: React.MouseEvent) => {
    props.onClear();
    setVal("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className={styles.wrap} key={story}>
      <div
        className={`${styles.form} ${props.className} ${
          props.isError ? styles.errorInput : ""
        }`}
      >
        <input
          type="text"
          ref={inputRef}
          autoFocus
          value={val}
          onChange={onChange}
          placeholder={"Paste a link to a plugin, widget or file"}
          className={styles.input}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSubmit();
            }
          }}
        />

        <div
          className={`${styles.gradienMask} ${
            props.isError ? styles.gradienMaskError : ""
          }`}
        />

        <button
          className={`${styles.button} ${styles.cross} ${
            val !== "" ? "" : styles.hidden
          } ${props.isError ? styles.errorButton : ""}`}
          disabled={val === "" ? true : false}
          onClick={onClear}
        >
          <Icon name="cross" />
        </button>
        <button
          className={`${styles.button} ${styles.enter} ${
            props.isError ? styles.errorButton : ""
          }`}
          disabled={val === "" ? true : false}
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <Icon name="enter" />
        </button>
      </div>

      {props.isError ? (
        <div className={styles.errorMessage}>
          Oops! Can't find it. ??heck the link for typos.
        </div>
      ) : null}
    </section>
  );
};

SearchInput.defaultProps = {
  className: "",
} as Partial<Props>;

export default SearchInput;
