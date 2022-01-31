import styled from 'styled-components';

export const CardStyled = styled.img`
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  height: 15em;
  width: 10em;
  padding: 0.5em;
  object-fit: contain;
  justify-self: center;
  @media (max-width: 530px) {
    height: 13em;
  }
`;
