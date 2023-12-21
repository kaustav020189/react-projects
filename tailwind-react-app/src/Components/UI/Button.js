const greenClass =
  "px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent";
const redClass =
  "px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent";

const Button = (props) => {
  const buttonClass = props.buttonStyle === "green" ? greenClass : redClass;

  return (
    <button
      type={props.buttonType}
      className={buttonClass}
      onClick={props.onClick}
    >
      {props.buttonTitle}
    </button>
  );
};

export default Button;
