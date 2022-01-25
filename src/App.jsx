import React, { useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  return (
    <div>
      <Navbar bestScore={bestScore} currentScore={currentScore}></Navbar>
      <Cards></Cards>
    </div>
  );
}

export default App;
