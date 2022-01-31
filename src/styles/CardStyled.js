import styled from 'styled-components';

export const CardStyled = styled.img`
  background-color: ${(props) => props.theme.cardBgColor};
  border-color: ${(props) => props.theme.secondaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border-style: solid;
  border-width: 0.2em;
  box-shadow: ${(props) => props.theme.boxShadow};
  height: 15em;
  justify-self: center;
  object-fit: contain;
  padding: 0.3em;
  width: 10em;
  @media (max-width: 530px) {
    height: 13em;
  }
`;
