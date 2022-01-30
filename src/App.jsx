import React, { useEffect, useState } from 'react';
import { AppStyled } from './styles/AppStyled';
import Cards from './components/Cards/Cards';
import Navbar from './components/NavBar/NavBar';
import { timesClickedObj } from './helpers/timesClickedObj';

function App() {
  const [bestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [timesClicked, setTimesClicked] = useState(timesClickedObj);

  const updateTimesClicked = (name) => {
    setTimesClicked((prevState) => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  // Updates currentScore based on timesClicked
  useEffect(() => {
    const currentClicks = Object.keys(timesClicked).reduce((acc, name) => {
      acc = timesClicked[name] < 2 ? (acc += timesClicked[name]) : NaN;
      return acc;
    }, 0);
    if (!isNaN(currentClicks)) {
      setCurrentScore(currentClicks);
    } else {
      setTimesClicked(timesClickedObj);
    }
  }, [timesClicked]);

  return (
    <AppStyled>
      <Navbar bestScore={bestScore} currentScore={currentScore}></Navbar>
      <Cards updateTimesClicked={updateTimesClicked}></Cards>
    </AppStyled>
  );
}

export default App;
