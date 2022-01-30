import React from 'react';
import { CardStyled } from '../../styles/CardStyled';

function Card({
  name,
  nameId,
  imgSource,
  randomizeNumbers,
  updateTimesClicked,
}) {
  const onClick = (nameId) => {
    updateTimesClicked(nameId);
    randomizeNumbers();
  };

  return (
    <CardStyled src={imgSource} alt={name} onClick={() => onClick(nameId)} />
  );
}

export default Card;
