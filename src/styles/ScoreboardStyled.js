import styled from 'styled-components';

export const ScoreboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: scoreboard;
  justify-self: center;
  @media (max-width: 815px) {
    margin-top: 2em;
  }
`;
export const BestScore = styled.span`
  font-size: 1.5em;
  font-weight: 600;
`;
export const CurrentScore = styled.span``;
