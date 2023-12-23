import Sidebar from "../../../Components/Sidebar";
import InputField from "../../../Components/UI/InputField";
import styles from "./ContactsApp.module.css";

const searchSubmitHandler = () => {};

const ContactsApp = () => {
  return (
    <div id={styles["contactsAppContainer"]}>
      <Sidebar>
        <InputField
          textFieldType="input"
          textFieldPlaceholder="Search..."
          submitHandler={searchSubmitHandler}
        ></InputField>
      </Sidebar>
    </div>
  );
};

export default ContactsApp;
