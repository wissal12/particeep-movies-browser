import React from 'react';
import { useMovies } from '../../hooks/useMovies';
import { Movie } from '../../components/Movie';

import * as S from './Movies.styles';
import { MultipleSelect } from '../../components/MultiSelect';
import { useDispatch } from 'react-redux';
import { filterMoviesByCategories } from '../../redux-store/movies/movies.slice';

export const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, allMovies, loadingMovies } = useMovies();

  const moviesCategoriesWithDuplicates = allMovies.map(
    (movie) => movie.category,
  );
  const moviesCategories = [...new Set(moviesCategoriesWithDuplicates)];

  if (loadingMovies) return <>loading...</>;
  return (
    <>
      <MultipleSelect
        title='catergories'
        options={moviesCategories}
        onSubmit={(catergories) =>
          dispatch(filterMoviesByCategories({ catergories }))
        }
      />
      <S.MoviesWrapper>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </S.MoviesWrapper>
    </>
  );
};
