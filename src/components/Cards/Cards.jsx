import React, { useState, useEffect } from 'react';
import { CardsStyled } from '../../styles/CardsStyled';
import Card from './Card';
import { images } from '../../helpers/images';

function Cards({ cardsIdArray }) {
  const [allCards, setAllCards] = useState([]);

  // Generates the list of cards which will be rendered
  useEffect(() => {
    console.log(cardsIdArray);
    const allCardsArray = Object.keys(cardsIdArray).map((name) => {
      const { id, cardName } = cardsIdArray[name];
      return <Card key={id} cardName={cardName}></Card>;
    });
    if (!allCards[0]) setAllCards(allCardsArray);
  }, [allCards, cardsIdArray]);

  return <CardsStyled>{allCards}</CardsStyled>;
}

export default Cards;
