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
  position: relative;
  width: 400px;
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

export const DeleteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
