import styled from 'styled-components';

export const AppStyled = styled.div`
  display: grid;
  font-family: ${(props) => props.theme.fontFamily};
  margin-left: auto;
  margin-right: auto;
  max-width: 1230px;
`;
