import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieResponse } from '../../api/types';

const initialState: { movies: MovieResponse[] } = {
  movies: [],
};
export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<{ movies: MovieResponse[] }>) => {
      state.movies = action.payload.movies;
    },
    likeMovie: (state, action: PayloadAction<{ movieId: string }>) => {
      const movie = state.movies.find(
        (movie) => movie.id === action.payload.movieId,
      );
      if (movie) {
        movie.likes++;
      }
    },
    dislikeMovie: (state, action: PayloadAction<{ movieId: string }>) => {
      const movie = state.movies.find(
        (movie) => movie.id === action.payload.movieId,
      );
      if (movie) {
        movie.dislikes++;
      }
    },
    deleteMovie: (state, action: PayloadAction<{ movieId: string }>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.movieId,
      );
    },
  },
});

export const { setMovies, likeMovie, dislikeMovie, deleteMovie } =
  moviesSlice.actions;

export default moviesSlice.reducer;
