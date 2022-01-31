import styled from 'styled-components';

export const CardStyled = styled.img`
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  height: 15em;
  justify-self: center;
  object-fit: contain;
  padding: 0.5em;
  width: 10em;
  @media (max-width: 530px) {
    height: 13em;
  }
`;
