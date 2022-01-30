import React, { useState } from 'react';
import { AppStyled } from './styles/AppStyled';
import Cards from './components/Cards/Cards';
import Navbar from './components/NavBar/NavBar';

function App() {
  const [bestScore] = useState(0);
  const [currentScore] = useState(0);

  return (
    <AppStyled>
      <Navbar bestScore={bestScore} currentScore={currentScore}></Navbar>
      <Cards></Cards>
    </AppStyled>
  );
}

export default App;
