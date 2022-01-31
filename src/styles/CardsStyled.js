import styled from 'styled-components';

export const CardsStyled = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(6, 1fr);
  margin: 1em;
  margin: 2em auto;
  width: max-content;

  @media (max-width: 1230px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 815px) {
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 573px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
