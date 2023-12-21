import { useState } from "react";
import "./GameBoard.css";
import Box from "./UI/Box";
import { WINNING_COMBINATIONS } from "../winning-combinations";

const GameBoard = () => {
  const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameboard, setGameboard] = useState(initialGameboard);

  const [currentMove, setCurrentMove] = useState("X");

  const [gameOver, setGameOver] = useState(false);

  const clickHandler = (position) => {
    checkGameStatus(gameboard, currentMove);
    if (!gameOver) {
      setGameboard((prevGameboard) => {
        const updatedGameboard = [...prevGameboard];
        if (updatedGameboard[position.rowIndex][position.colIndex] === null) {
          updatedGameboard[position.rowIndex][position.colIndex] = currentMove;
        }
        return updatedGameboard;
      });
      setCurrentMove((lastMove) => {
        return lastMove === "X" ? "O" : "X";
      });
    } else {
      return;
    }
  };

  const checkGameStatus = (gameBoard, currentMove) => {
    const winningPlayer = currentMove === "X" ? "O" : "X";
    for (const combination of WINNING_COMBINATIONS) {
      const firstElement = gameBoard[combination[0].row][combination[0].col];
      const secondElement = gameBoard[combination[1].row][combination[1].col];
      const thirdElement = gameBoard[combination[2].row][combination[2].col];

      if (
        firstElement &&
        firstElement === secondElement &&
        firstElement === thirdElement
      ) {
        alert("game over : winner is " + winningPlayer);
        setGameOver(() => {
          return true;
        });
      }
    }
  };

  return (
    <div id="game-board">
      {gameboard.map((row, rowIndex) => {
        return (
          <ul key={rowIndex}>
            {row.map((boxValue, colIndex) => {
              return (
                <Box
                  key={colIndex}
                  value={boxValue}
                  position={{ rowIndex, colIndex }}
                  clickHandler={clickHandler}
                ></Box>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default GameBoard;
