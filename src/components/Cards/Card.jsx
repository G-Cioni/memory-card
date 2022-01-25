import React from 'react';

function Card({ cardName, imgSource }) {
  return (
    <div>
      <img src={imgSource} alt={cardName} />
      <span>{cardName}</span>
    </div>
  );
}

export default Card;
