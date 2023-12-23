import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/UI/Card";
import styles from "./Dashboard.module.css";

interface applicationItem {
  key: number;
  name: string;
  description: string;
  linkto: string;
}

const applicationItems: applicationItem[] = [
  {
    key: 1,
    name: "Todo Maker",
    description: "A simple todo app (add / modify /delete)",
    linkto: "todoApp",
  },
  {
    key: 2,
    name: "Contact Book",
    description: "Manage Contacts (add / edit / delete)",
    linkto: "contactsApp",
  },
  {
    key: 3,
    name: "Regex Validator",
    description: "Enter regex and check string for it",
    linkto: "regexApp",
  },
  {
    key: 4,
    name: "Project Manager",
    description: "A simple project management app",
    linkto: "projectsApp",
  },
];

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles["menu-container"]}>
        <ul>
          {applicationItems.map((el) => {
            return (
              <li key={el.key}>
                <Link to={el.linkto} className={styles.link}>
                  <Card>
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles["app-container"]}>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
