import styles from "./InputField.module.css";

const InputField = (props: any) => {
  return (
    <input
      type={props.textFieldType}
      placeholder={props.textFieldPlaceholder}
      className={styles.textField}
    />
  );
};

export default InputField;
