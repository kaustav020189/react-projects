import Card from "./Components/UI/Card";
import GameBoard from "./Components/GameBoard";
import "./App.css";
import PlayerBanner from "./Components/PlayerBanner";
import { useState } from "react";

function App() {
  // const checkGameStatus = () => {
  //   const [gameOver, setGameOver] = useState({
  //     winOrDraw: null,
  //     winningPlayer: null,
  //   });
  // };

  return (
    <div className="App">
      <h3>Tic Tac Toe - Board Game</h3>
      <main>
        <Card>
          <div id="playersBar">
            <ul>
              <PlayerBanner initialName="Player 1" symbol="[X]"></PlayerBanner>
              <PlayerBanner initialName="Player 2" symbol="[O]"></PlayerBanner>
            </ul>
          </div>
          <GameBoard></GameBoard>
          {/* {gameOver.winOrDraw === null && (
            <GameBoard checkGameStatus={checkGameStatus}></GameBoard>
          )}
          {gameOver.winOrDraw === "win" && <p>Game over</p>} */}
        </Card>
      </main>
    </div>
  );
}

export default App;
