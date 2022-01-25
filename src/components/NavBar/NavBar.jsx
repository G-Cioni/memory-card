import React from 'react';
import { Description, NavBarStyled, Title } from '../../styles/NavbarStyled';
import Scoreboard from '../Scoreboard/Scoreboard';

function NavBar({ bestScore, currentScore }) {
  const title = 'Memory Card Game';
  const description = `Get points by clicking on an image 
                       but don't click on any more than once!`;
  return (
    <NavBarStyled>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
    </NavBarStyled>
  );
}

export default NavBar;
