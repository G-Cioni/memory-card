import React from 'react';
import {
  BestScore,
  CurrentScore,
  ScoreboardStyled,
} from '../../styles/ScoreboardStyled';

function Scoreboard({ bestScore, currentScore }) {
  return (
    <ScoreboardStyled>
      <BestScore>Best Score: {bestScore}</BestScore>
      <CurrentScore>Current Score: {currentScore}</CurrentScore>
    </ScoreboardStyled>
  );
}

export default Scoreboard;
