import React from 'react';
import { CardStyled } from '../../styles/CardStyled';

function Card({ cardName, imgSource }) {
  return <CardStyled src={imgSource} alt={cardName} />;
}

export default Card;
