import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winnerInfo, setWinnerInfo] = useState(null);

  const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return { player: newBoard[a], pattern };
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winnerInfo) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const result = checkWinner(newBoard);
    if (result) {
      setWinnerInfo(result);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinnerInfo(null);
  };

  const isDraw = board.every(cell => cell) && !winnerInfo;

  return (
    <>
      <Navbar />

      <section className="section" style={{ paddingTop: "120px" }}>
        <h1>Tic Tac Toe</h1>

        <h3 style={{ marginTop: "10px" }}>
          {winnerInfo
            ? `Winner: ${winnerInfo.player}`
            : isDraw
            ? "Match Draw!"
            : `Turn: ${isXTurn ? "X" : "O"}`}
        </h3>

        <div className="tic-container">
          {board.map((cell, index) => {
            const isWinningCell =
              winnerInfo?.pattern.includes(index);

            return (
              <div
                key={index}
                className={`tic-cell ${isWinningCell ? "win" : ""}`}
                onClick={() => handleClick(index)}
              >
                {cell}
              </div>
            );
          })}
        </div>

        <button onClick={resetGame} style={{ marginTop: "20px" }}>
          Restart Game
        </button>
      </section>

      <Footer />
    </>
  );
}
