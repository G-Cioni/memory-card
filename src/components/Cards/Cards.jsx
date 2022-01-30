import React, { useState, useEffect } from 'react';
import { CardsStyled } from '../../styles/CardsStyled';
import Card from './Card';
import images from './';

function Cards() {
  const [allCards, setAllCards] = useState([]);

  // Generates the list of cards which will be rendered
  useEffect(() => {
    const allCardsArray = Object.keys(images).map((cardName, index) => {
      const { id, name, image } = images[cardName];
      return <Card key={id} name={name} imgSource={image}></Card>;
    });
    if (!allCards[0]) setAllCards(allCardsArray);
  }, [allCards]);

  return <CardsStyled>{allCards}</CardsStyled>;
}

export default Cards;
