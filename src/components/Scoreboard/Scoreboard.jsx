import React from 'react';

function Scoreboard({ bestScore, currentScore }) {
  return (
    <div>
      <span>Best Score: {bestScore}</span>
      <span>Current Score: {currentScore}</span>
    </div>
  );
}

export default Scoreboard;
