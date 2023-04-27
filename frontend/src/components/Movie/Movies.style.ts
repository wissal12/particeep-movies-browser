import styled from 'styled-components';
import { fontWeights } from '../../stylesheet';

export const MovieCardArea = styled.div<{
  area: 'title' | 'ratio' | 'category';
}>`
  grid-area: ${(props) => props.area};
`;

export const MovieTitle = styled(MovieCardArea)`
  font-weight: ${fontWeights.bold};
`;

export const MovieLikesRatio = styled(MovieCardArea)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MovieCard = styled.div`
  width: 300px;
  height: 300px;
  background: blue;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5px;
  grid-column-gap: 20px;
  grid-template-areas:
    'title ratio'
    'category ratio';
`;
