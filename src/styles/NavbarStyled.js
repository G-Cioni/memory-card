import styled from 'styled-components';

export const NavBarStyled = styled.nav`
  align-items: center;
  display: grid;
  grid-template-areas: 'title scoreboard' 'description scoreboard';

  @media (max-width: 815px) {
    grid-template-areas: 'title' 'description' ' scoreboard';
  }
`;

export const Title = styled.h1`
  font-size: 3.5em;
  grid-area: title;
  justify-self: center;
  margin: 0.2em 0em;
`;

export const Description = styled.span`
  grid-area: description;
  justify-self: center;
`;
