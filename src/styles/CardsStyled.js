import styled from 'styled-components';

export const CardsStyled = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(4, 1fr);
  margin: 1em;
  margin: 3em auto;
  width: max-content;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 530px) {
    grid-gap: 1.2em;
  }
`;
