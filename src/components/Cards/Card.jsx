import React from 'react';

function Card({ cardName, imgSource }) {
  return (
    <div>
      <img src={imgSource} alt={cardName} />
    </div>
  );
}

export default Card;
