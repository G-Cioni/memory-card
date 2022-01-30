import React, { useState, useEffect, useCallback } from 'react';
import { CardsStyled } from '../../styles/CardsStyled';
import Card from './Card';
import { images } from '../../helpers/images';

function Cards({ updateTimesClicked }) {
  const [allCards, setAllCards] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);

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
  }, [randomNumbers, randomizeNumbers, updateTimesClicked]);

  return <CardsStyled>{allCards}</CardsStyled>;
}

export default Cards;
