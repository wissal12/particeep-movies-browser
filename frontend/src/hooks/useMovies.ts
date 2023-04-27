import { useEffect, useState } from 'react';
import { MovieResponse } from '../api/types';
import { movies$ } from '../api/mock';

export const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieResponse[]>([]);

  const loadMovies = async () => {
    setLoading(true);
    const fetchedMovies = await movies$;
    setMovies(fetchedMovies);
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return {
    loadingMovies: loading,
    movies,
    refetch: loadMovies,
  };
};
