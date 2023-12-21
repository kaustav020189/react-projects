import styles from "./Navbar.module.css";
import styles2 from "../App.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar && styles2["gray-box-shadow"]}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Todo Maker</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
