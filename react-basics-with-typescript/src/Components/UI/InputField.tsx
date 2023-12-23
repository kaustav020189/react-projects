import Button from "./Button";
import styles from "./InputField.module.css";

const InputField = (props: any) => {
  const formSubmitHandler = (event: Event): void => {
    event.preventDefault();

    props.submitHandler.call();
  };
  return (
    <form onSubmit={props.submitHandler} className={styles.inputFieldForm}>
      <input
        type={props.textFieldType}
        placeholder={props.textFieldPlaceholder}
        className={styles.textField}
      />
      <Button
        buttonType="button"
        buttonValue="New"
        buttonColor="info"
        clickHandler={(event: Event) => {
          formSubmitHandler(event);
        }}
      ></Button>
    </form>
  );
};

export default InputField;
