import * as React from "react";
import styles from "./styles.module.scss";
import Icon from "../../components/Icon";

interface Props {
  className?: string;
  placeholder?: string;
  value?: string;
  isErroor?: boolean;
  onSubmit: (value: string) => void;
  onChange: (value: string) => void;
}

const SearchInput: React.FunctionComponent<Props> = (props) => {
  const [val, setVal] = React.useState(props.value || "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    props.onChange(val);
  };

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onSubmit(val);
  };

  return (
    <section className={styles.wrap}>
      <form
        className={`${styles.form} ${props.className} ${
          props.isErroor ? styles.errorInput : ""
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
          className={styles.button}
          disabled={val === "" ? true : false}
          onClick={onSubmit}
        >
          <Icon className={styles.arrow} name="arrow" />
        </button>
      </form>
      {props.isErroor ? (
        <div className={styles.errorMessage}>
          Oops! Can't find it. Check the ID or category.
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
