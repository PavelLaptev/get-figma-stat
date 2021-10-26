import * as React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  YAxis,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "./styles.module.scss";

interface Props {
  data: Array<object>;
  bar: string;
  title: string;
}

const Chart: React.FunctionComponent<Props> = (props) => {
  return (
    <section className={styles.wrap}>
      <h3 className={styles.title}>{props.title}</h3>
      <ResponsiveContainer width={"100%"} height={180}>
        <BarChart data={props.data} className={styles.chart}>
          <CartesianGrid />
          <XAxis dataKey="date" tick={{ fontSize: 12, fontFamily: "Inter" }} />
          <YAxis mirror tick={{ fontSize: 12, fontFamily: "Inter" }} />
          <Tooltip />
          <Bar dataKey={props.bar} fill={"var(--primary-clr)"} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

Chart.defaultProps = {} as Partial<Props>;

export default Chart;
