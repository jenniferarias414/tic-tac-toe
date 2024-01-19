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

  const calculateWinner = (arr) => {
    const lines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    for (let i=0; i < lines.length; i++){
      console.log(lines[i])
      const [a, b, c] = lines[i];
      if (arr[a] &&
        arr[a] === arr[b] &&
        arr[a] === arr[c]){
          return `${arr[a]} wins this one!`
      }
    } return 'Who will win?'
  }

  const myStyle = {
    marginTop: '80px',
    marginRight: '30px',
    marginBottom: '20px',
  };

  // const newVar = 'Props to you'
  return (
    <div className="App">
      <button style={myStyle} onClick={handleClick}>Reset</button>
      <span>
        {calculateWinner(squares)}
      </span>
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
