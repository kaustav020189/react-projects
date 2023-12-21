import "./Box.css";

const Box = ({ value, position, clickHandler }) => {
  const boxClickHandler = (e) => {
    clickHandler(position); // LIFTING STATE UP - sending the position of the click to parent component
  };

  return (
    <li onClick={boxClickHandler} className="box">
      {value}
    </li>
  );
};

export default Box;
