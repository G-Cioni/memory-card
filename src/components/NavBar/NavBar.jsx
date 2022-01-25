import React from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';

function NavBar({ bestScore, currentScore }) {
  const title = 'Memory Card Game';
  const description = `Get points by clicking on an image 
                       but don't click on any more than once!`;
  return (
    <div>
      <h1>{title}</h1>
      <span>{description}</span>
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
    </div>
  );
}

export default NavBar;
