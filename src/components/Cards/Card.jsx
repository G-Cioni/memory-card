import React from 'react';
import { CardStyled } from '../../styles/CardStyled';
import example from '../../images/example.jpg';

function Card({ cardName, imgSource }) {
  return <CardStyled src={example} alt={cardName} />;
}

export default Card;
