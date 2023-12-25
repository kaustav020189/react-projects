import Button from "./Button";
import InputField from "./InputField";
import styles from "./SingleInputForm.module.css";

const SingleInputForm = (props: any) => {
  const buttonClickHandler = (event: Event): void => {
    event.preventDefault();

    // call form submit method from parent
    props.formSubmitHandler();
  };
  return (
    <form onSubmit={props.submitHandler} className={styles.inputFieldForm}>
      <InputField
        textFieldType={props.textFieldType}
        textFieldPlaceholder={props.textFieldPlaceholder}
      ></InputField>
      <Button
        buttonType="button"
        buttonValue="New"
        buttonColor="info"
        clickHandler={(event: Event) => {
          buttonClickHandler(event);
        }}
      ></Button>
    </form>
  );
};

export default SingleInputForm;
