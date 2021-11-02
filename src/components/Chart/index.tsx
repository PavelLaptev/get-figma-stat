import * as React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "./styles.module.scss";

interface Props {
  data: Array<any>;
  category: string;
}

const Chart: React.FunctionComponent<Props> = (props) => {
  return (
    <section className={styles.wrap}>
      <ResponsiveContainer width={"100%"} height={260}>
        <LineChart data={props.data} className={styles.chart}>
          <CartesianGrid />
          <XAxis dataKey="date" tick={{ fontSize: 12, fontFamily: "Inter" }} />
          <YAxis mirror tick={{ fontSize: 12, fontFamily: "Inter" }} />
          <Tooltip />
          <Line
            dataKey={"views"}
            fill={"var(--chart-1-clr)"}
            stroke={"var(--chart-1-clr)"}
            dot={false}
            strokeWidth={2}
          />
          <Line
            dataKey={props.category === "plugins" ? "installs" : "duplicates"}
            fill={"var(--chart-2-clr)"}
            stroke={"var(--chart-2-clr)"}
            dot={false}
            strokeWidth={2}
          />
          <Line
            dataKey={"likes"}
            fill={"var(--chart-3-clr)"}
            stroke={"var(--chart-3-clr)"}
            dot={false}
            strokeWidth={2}
          />
          <Line
            dataKey={"comments"}
            fill={"var(--chart-4-clr)"}
            stroke={"var(--chart-4-clr)"}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

Chart.defaultProps = {
  lineChart: false,
} as Partial<Props>;

export default Chart;
