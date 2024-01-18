// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
}

  // const newVar = 'Props to you'
  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              squares={squares}
              index={index}
              setSquares={setSquares}
              squareValue={value}
              player={player}
              setPlayer={setPlayer}
            />
          );
          })}
      </div>
    </div>
  );
}

export default App;
