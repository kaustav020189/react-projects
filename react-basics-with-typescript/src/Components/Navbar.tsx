import styles from "./Navbar.module.css";
import styles2 from "../App.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} ${styles2["gray-box-shadow"]}`}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className={styles.link}>
            App Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
