import styled from 'styled-components';

export const NavBarStyled = styled.nav`
  align-items: center;
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.fontColor};
  display: grid;
  grid-template-areas: 'title scoreboard' 'description scoreboard';
  padding: 1.5em 0em;
  position: sticky;
  top: 0.5em;
  @media (max-width: 815px) {
    grid-template-areas: 'title' 'description' ' scoreboard';
    top: -8.5em;
  }
`;

export const Title = styled.h1`
  font-size: 3.5em;
  grid-area: title;
  justify-self: center;
  margin: 0.2em 0em;
  @media (max-width: 545px) {
    text-align: center;
    font-size: 2.6em;
  }
  @media (max-width: 400px) {
    text-align: center;
    font-size: 2.4em;
  }
`;

export const Description = styled.span`
  grid-area: description;
  justify-self: center;
  @media (max-width: 545px) {
    text-align: center;
  }
`;
