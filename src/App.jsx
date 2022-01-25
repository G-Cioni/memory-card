import Cards from './components/Cards/Cards';
import Navbar from './components/NavBar/NavBar';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function App() {
  const [bestScore] = useState(0);
  const [currentScore] = useState(0);
  const [cardNames] = useState([
    'example1',
    'example2',
    'example3',
    'example4',
    'example5',
    'example6',
    'example7',
    'example8',
    'example9',
    'example10',
    'example11',
    'example12',
  ]);
  const [cardsIdArray, setCardsIdArray] = useState([]);
  const [numberOfCards] = useState(12);

  // Sets CardsIdArray based on numberOfCards
  useEffect(() => {
    const updatedCardsIdArray = [];
    for (let i = 0; i < numberOfCards; i++) {
      updatedCardsIdArray[cardNames[i]] = {
        cardName: cardNames[i],
        id: uniqid(),
      };
    }
    setCardsIdArray(updatedCardsIdArray);
  }, [cardNames, numberOfCards]);

  return (
    <div>
      <Navbar bestScore={bestScore} currentScore={currentScore}></Navbar>
      <Cards cardsIdArray={cardsIdArray}></Cards>
    </div>
  );
}

export default App;
