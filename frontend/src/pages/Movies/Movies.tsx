import React from 'react';
import { useMovies } from '../../hooks/useMovies';
import { Movie } from '../../components/Movie';

import * as S from './Movies.styles';

export const Movies: React.FC = () => {
  const { movies, loadingMovies } = useMovies();

  if (loadingMovies) return <>loading...</>;
  return (
    <S.MoviesWrapper>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </S.MoviesWrapper>
  );
};
