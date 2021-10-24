import Chart from "./components/Chart";
import SearchInput from "./components/SearchInput";
import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={styles.wrap}>
      <h1>Figma Statistics</h1>
      <SearchInput />
      {/* <Chart
        data={[
          { name: "Page A", uv: 2 },
          { name: "Page b", uv: 200 },
          { name: "Page c", uv: 100 },
          { name: "Page c", uv: 400 },
        ]}
      /> */}
    </div>
  );
};

export default App;
