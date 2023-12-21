import { useState } from "react";
import "./PlayerBanner.css";

const PlayerBanner = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [pname, setPName] = useState(initialName);

  const editPlayerNameHandler = () => {
    setIsEditing((editing) => !editing); // function form to avoid state state
  };

  const handleChange = (e) => {
    setPName(e.target.value);
  };

  // Enter to save functionality
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      setIsEditing((editing) => !editing); // function form to avoid state state
    }
  };

  let playerName = <span>{pname}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={pname}
        required
      />
    );
  }

  return (
    <li className="player-banner">
      {playerName}
      <span>{symbol}</span>
      <button type="button" onClick={editPlayerNameHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default PlayerBanner;
