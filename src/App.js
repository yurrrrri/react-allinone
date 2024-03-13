import { useState } from "react";

import "./App.css";
import Board from "./components/Board";

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [isX, setIsX] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = `Next player: ${isX ? "X" : "O"}`;
  }

  function handleClick(i) {
    const newSquares = current.squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = isX ? "X" : "O";
    setHistory([...history, { squares: newSquares }]);
    setIsX((current) => !current);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
      </div>
    </div>
  );
}

export default App;
