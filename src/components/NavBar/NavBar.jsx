import React from 'react';
import { Description, NavBarStyled, Logo } from '../../styles/NavbarStyled';
import Scoreboard from '../Scoreboard/Scoreboard';
import logo from '../../images/logo.png';

function NavBar({ bestScore, currentScore }) {
  const description = `Get points by clicking on an image 
                       but don't click on any more than once!`;
  return (
    <NavBarStyled>
      <Logo src={logo} alt={'Dragon Ball logo'} />

      <Description>{description}</Description>
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
    </NavBarStyled>
  );
}

export default NavBar;
