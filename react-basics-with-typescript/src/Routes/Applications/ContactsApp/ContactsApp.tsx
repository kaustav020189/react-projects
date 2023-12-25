import Container from "../../../Components/Container";
import Sidebar from "../../../Components/Sidebar";
import Button from "../../../Components/UI/Button";
import InputField from "../../../Components/UI/InputField";
import styles from "./ContactsApp.module.css";

const buttonClickHandler = (event: Event) => {};

const ContactsApp: React.FC = () => {
  return (
    <div id={styles["contactsAppContainer"]}>
      <aside className={styles.sidebar}>
        <InputField
          textFieldType="input"
          textFieldPlaceholder="Search..."
        ></InputField>
        <Button
          buttonType="button"
          buttonValue="New"
          buttonColor="info"
          clickHandler={(event: Event) => {
            buttonClickHandler(event);
          }}
        ></Button>
      </aside>
    </div>
  );
};

export default ContactsApp;
