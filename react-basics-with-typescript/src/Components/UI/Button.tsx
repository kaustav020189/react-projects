import styles from "./Button.module.css";

const Button = (props: any) => {
  let btnColor;
  switch (props.buttonColor) {
    case "cancel":
      btnColor = styles["buttonColorRed"];
      break;
    case "confirm":
      btnColor = styles["buttonColorGreen"];
      break;
    case "info":
      btnColor = styles["buttonColorBlue"];
      break;
  }

  return (
    <input
      type={props.buttonType}
      value={props.buttonValue}
      onClick={props.clickHandler}
      className={`${styles.button} ${btnColor}`}
    />
  );
};

export default Button;
