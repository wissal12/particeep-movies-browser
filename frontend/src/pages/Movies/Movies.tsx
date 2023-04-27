import React from 'react';
import { useMovies } from '../../hooks/useMovies';
import { Movie } from '../../components/Movie';

import * as S from './Movies.styles';
import { MultipleSelect } from '../../components/MultiSelect';
import { useDispatch } from 'react-redux';
import { filterMoviesByCategories } from '../../redux-store/movies/movies.slice';
import { Paginator } from '../../components/Paginatior';
import { CircularProgress } from '@mui/material';

export const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, allMovies, loadingMovies } = useMovies();

  const moviesCategoriesWithDuplicates = allMovies.map(
    (movie) => movie.category,
  );
  const moviesCategories = [...new Set(moviesCategoriesWithDuplicates)];

  if (loadingMovies) return <CircularProgress />;
  return (
    <>
      <MultipleSelect
        title='catergories'
        options={moviesCategories}
        onSubmit={(catergories) =>
          dispatch(filterMoviesByCategories({ catergories }))
        }
      />
      <Paginator
        elements={movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
        elementsPerPage={6}
        ElementsWrapper={S.MoviesWrapper}
      />
    </>
  );
};
