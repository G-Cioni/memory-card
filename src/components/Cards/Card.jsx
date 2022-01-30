import React from 'react';
import { CardStyled } from '../../styles/CardStyled';

function Card({ name, imgSource, onClick }) {
  return <CardStyled src={imgSource} alt={name} onClick={() => onClick()} />;
}

export default Card;
