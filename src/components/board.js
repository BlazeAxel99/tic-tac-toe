import React from 'react';

import Square from './square';

const board = () => {
  return (
    <div>
      <div>
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>

      <div>
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div>
        <Square value={6} />
        <Square value={5} />
        <Square value={4} />
      </div>
    </div>
  );
};

export default board;
