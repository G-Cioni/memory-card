import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import { CardsStyled } from '../../styles/CardsStyled';
import Card from './Card';
import { images } from '../../helpers/images';

function Cards({ updateTimesClicked }) {
  const [allCards, setAllCards] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [scroll, setScroll] = useState(0);

  // Updates randomNumbers for cards to be re-sorted in random order.
  const randomizeNumbers = useCallback(() => {
    const randomNumbersArray = [];

    for (let i = 0; i < Object.keys(images).length; i++) {
      randomNumbersArray.push(Math.random());
    }
    setRandomNumbers(randomNumbersArray);
  }, []);

  // Generates and randomly sorts cards which will be rendered
  useEffect(() => {
    if (!randomNumbers[0]) randomizeNumbers();

    const allCardsTemp = Object.keys(images)
      .map((cardName, index) => {
        const { id, name, image } = images[cardName];
        return (
          <Card
            key={id}
            name={name}
            nameId={cardName}
            imgSource={image}
            randomNumber={randomNumbers[index]}
            randomizeNumbers={randomizeNumbers}
            updateTimesClicked={updateTimesClicked}
          ></Card>
        );
      })
      .sort((a, b) => (a.props.randomNumber < b.props.randomNumber ? 1 : -1));

    setAllCards(allCardsTemp);
  }, [randomNumbers, randomizeNumbers, scroll, updateTimesClicked]);

  // Sets "scroll" event listener and removes it on unmount.
  useEffect(() => {
    document.addEventListener('scroll', () => setScroll(window.scrollY));
    return document.removeEventListener('scroll', () =>
      setScroll(window.scrollY),
    );
  }, []);

  // Sets scroll right before page rerenders
  useLayoutEffect(() => {
    window.scrollTo(0, scroll);
  });
  return <CardsStyled>{allCards}</CardsStyled>;
}

export default Cards;
