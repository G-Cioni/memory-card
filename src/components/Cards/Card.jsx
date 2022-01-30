import React from 'react';
import { CardStyled } from '../../styles/CardStyled';

function Card({ name, imgSource }) {
  return <CardStyled src={imgSource} alt={name} />;
}

export default Card;
