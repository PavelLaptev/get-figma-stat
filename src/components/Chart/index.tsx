import * as React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  YAxis,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./styles.module.scss";

interface Props {
  data: Array<object>;
}

const Chart: React.FunctionComponent<Props> = (props) => {
  return (
    <section className={styles.wrap}>
      <h1>Hello Chart</h1>
      <ResponsiveContainer width={700} height="80%">
        <BarChart data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

Chart.defaultProps = {} as Partial<Props>;

export default Chart;
