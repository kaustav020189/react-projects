import styles from "./Sidebar.module.css";

const Sidebar = (props: any) => {
  return <div className={styles.sidebar}>{props.children}</div>;
};

export default Sidebar;
