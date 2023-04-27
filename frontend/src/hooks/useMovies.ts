import { useCallback, useEffect, useState } from 'react';
import { movies$ } from '../api/mock';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../redux-store/movies/movies.slice';
import { RootState } from '../redux-store';

export const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.moviesStore.movies);
  const allMovies = useSelector(
    (state: RootState) => state.moviesStore.allMovies,
  );

  const loadMovies = useCallback(async () => {
    setLoading(true);
    const fetchedMovies = await movies$;
    dispatch(setMovies({ movies: fetchedMovies }));
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return {
    loadingMovies: loading,
    movies,
    allMovies,
    refetch: loadMovies,
  };
};
