import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  name?: string;
  className?: string;
}

const path: any = {
  arrow:
    "M27.3826 15L13.6861 2.74524L15.0197 1.25476L31.4997 16L15.0197 30.7452L13.6861 29.2548L27.3826 17H2V15H27.3826Z",
};

const Icon: React.FunctionComponent<Props> = (props) => {
  return (
    <i className={`${styles.wrap} ${props.className}`}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={props.name ? path[props.name] : null}
        />
      </svg>
    </i>
  );
};

Icon.defaultProps = {
  name: "arrow",
  className: "",
} as Partial<Props>;

export default Icon;
