import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/UI/Card";
import styles from "./Dashboard.module.css";

import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";
import Button from "../../Components/UI/Button";
import { useEffect, useState } from "react";

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
    description: "Display products fetched from DummyJSON using pagination",
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
    description:
      "React Forms with TS generics, interfaces & usage of cookies and localstorage",
    linkto: "formsApp",
  },
];

const Dashboard = () => {
  const [showAppDrawer, setShowAppDrawer] = useState(true);

  const toggleAppDrawer = () => {
    setShowAppDrawer(!showAppDrawer);
  };

  const pullUpDrawer = () => {
    // pull up the drawer after 2 seconds
    setTimeout(() => {
      setShowAppDrawer(!showAppDrawer);
    }, 1000);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className={styles["menu-container"]}>
        {showAppDrawer && (
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
        )}
        <button
          type="button"
          className={styles.toggleButton}
          onClick={toggleAppDrawer}
        >
          {!showAppDrawer ? (
            <HiArrowCircleDown className={styles.arrowIcon} />
          ) : (
            <HiArrowCircleUp className={styles.arrowIcon} />
          )}
        </button>
      </div>

      <div className={styles["app-container"]}>
        <Outlet context={pullUpDrawer} />
      </div>
    </>
  );
};

export default Dashboard;
