import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/UI/Card";
import styles from "./Dashboard.module.css";

type applicationItem = {
  name: string;
  description: string;
  linkto: string;
};

const applicationItems: applicationItem[] = [
  {
    name: "Todo Maker",
    description: "A simple todo app (add / modify /delete)",
    linkto: "todoApp",
  },
  {
    name: "Contact Book",
    description: "Manage Contacts (add / edit / delete)",
    linkto: "contactsApp",
  },
  {
    name: "Regex Validator",
    description: "Enter regex and check string for it",
    linkto: "regexApp",
  },
  {
    name: "Project Manager",
    description: "A simple project management app",
    linkto: "projectsApp",
  },
  {
    name: "React Pagination",
    description: "A simple project management app",
    linkto: "paginationApp",
  },
  {
    name: "React Hooks",
    description: "useReducer, useCallback, useContext, useMemo",
    linkto: "reactHooksApp",
  },
  {
    name: "Custom Hooks",
    description: "Creation of a custom hook",
    linkto: "customHookApp",
  },
  {
    name: "User Creation / Form Handling",
    description: "React Forms",
    linkto: "formsApp",
  },
];

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles["menu-container"]}>
        <ul>
          {applicationItems.map((el, index) => {
            return (
              <li key={index}>
                <NavLink to={el.linkto}>
                  <Card>
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                  </Card>
                </NavLink>
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
