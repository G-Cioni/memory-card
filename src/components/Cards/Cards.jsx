import React, { useState } from 'react';

function Cards() {
  const [allCards, setAllCards] = useState([]);
  return <div>{allCards}</div>;
}

export default Cards;
