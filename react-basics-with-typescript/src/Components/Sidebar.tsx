import styles from "./Sidebar.module.css";
import Card from "./UI/Card";

interface sidebarItem {
  key: number;
  name: string;
  description: string;
}

const sidebarItems: sidebarItem[] = [
  {
    key: 1,
    name: "Todo Maker",
    description: "A simple todo app (add / modify /delete)",
  },
  {
    key: 2,
    name: "Contact Book",
    description: "Manage Contacts (add / edit / delete)",
  },
  {
    key: 3,
    name: "Regex Validator",
    description: "Enter regex and check string for it",
  },
];

const Sidebar = () => {
  return (
    <article className={styles.sidebar}>
      <ul>
        {sidebarItems.map((el) => {
          return (
            <li key={el.key}>
              <Card>
                <h3>{el.name}</h3>
                <p>{el.description}</p>
              </Card>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Sidebar;
