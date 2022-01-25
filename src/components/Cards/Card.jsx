import React from 'react';

function Card({ cardDescription, imgSource }) {
  return (
    <div>
      <img src={imgSource} alt={cardDescription} />
      <span>{cardDescription}</span>
    </div>
  );
}

export default Card;
