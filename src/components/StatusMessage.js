import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `winner is ${winner}`
  // : `Next player is ${current.isNext ? 'X' : 'O'}`;
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div>
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isNext ? 'text-green' : 'text-orange'}>
            {current.isNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
