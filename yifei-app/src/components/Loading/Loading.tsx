import { Spin } from "antd";
import styles from "./Loading.module.less";

const loading = () => {
  return (
    <div className={styles.loading}>
      <Spin />
    </div>
  );
};

export default loading;
