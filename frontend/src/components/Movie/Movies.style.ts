import styled from 'styled-components';
import { colorUsage, fontWeights } from '../../stylesheet';

export const MovieCardArea = styled.div<{
  area: 'title' | 'ratio' | 'category';
}>`
  grid-area: ${(props) => props.area};
`;

export const MovieTitle = styled(MovieCardArea)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${fontWeights.bold};
`;

export const MovieCategory = styled(MovieCardArea)`
  display: flex;
  justify-content: center;
  align-items: start;
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
  height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5px;
  grid-column-gap: 20px;
  grid-template-areas:
    'title ratio'
    'category ratio';
  background: ${colorUsage.movieCard.background};
  border-radius: 20px;
  color: white;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${colorUsage.button.delete.background};
  color: ${colorUsage.button.delete.text};
  border: none;
  padding: 2px 10px;
  border-radius: 5px;
  font-weight: 600;
`;
