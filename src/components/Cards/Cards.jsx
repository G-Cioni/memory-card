import React, { useState, useEffect, useCallback } from 'react';
import { CardsStyled } from '../../styles/CardsStyled';
import Card from './Card';
import { images } from '../../helpers/images';

function Cards({ updateTimesClicked }) {
  const [allCards, setAllCards] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [scroll, setScroll] = useState(0);

  // Sets random numbers
  const randomizeNumbers = useCallback(() => {
    const randomNumbersArray = [];

    for (let i = 0; i < Object.keys(images).length; i++) {
      randomNumbersArray.push(Math.random());
    }
    setRandomNumbers(randomNumbersArray);
  }, []);

  // Generates and randomly sorts cards which will be rendered
  useEffect(() => {
    if (!randomNumbers[0]) randomizeNumbers();

    const allCardsTemp = Object.keys(images)
      .map((cardName, index) => {
        const { id, name, image } = images[cardName];
        return (
          <Card
            key={id}
            name={name}
            nameId={cardName}
            imgSource={image}
            randomNumber={randomNumbers[index]}
            randomizeNumbers={randomizeNumbers}
            updateTimesClicked={updateTimesClicked}
          ></Card>
        );
      })
      .sort((a, b) => (a.props.randomNumber < b.props.randomNumber ? 1 : -1));

    setAllCards(allCardsTemp);
  }, [randomNumbers, randomizeNumbers, scroll, updateTimesClicked]);

  useEffect(() => {
    document.addEventListener('scroll', () => setScroll(window.scrollY));
    return document.removeEventListener(
      'scroll',
      () => window.scrollY !== 0 && setScroll(window.scrollY),
    );
  }, []);

  useEffect(() => {
    console.log(window.scrollY, scroll);
    window.scrollTo(0, scroll);
  });
  return <CardsStyled>{allCards}</CardsStyled>;
}

export default Cards;
