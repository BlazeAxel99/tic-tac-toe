import React, { useState } from 'react';
import Board from './components/board';
import History from './components/history';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';

import './Styles/root.scss';
const NEW_GAME = [{ board: Array(9).fill(null), isNext: true }];

const App = () => {
  const [history, sethistory] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);
  const [currentMove, setcurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    sethistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isNext: !last.isNext });
    });
    setcurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setcurrentMove(move);
  };
  const onNewGame = () => {
    sethistory(NEW_GAME);
    setcurrentMove(0);
  };
  return (
    <div className="app">
      <h1>TIC-TAC-TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={onNewGame}>
        Start new game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
