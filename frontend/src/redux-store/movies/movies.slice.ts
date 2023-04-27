import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieResponse } from '../../api/types';

const initialState: { movies: MovieResponse[]; allMovies: MovieResponse[] } = {
  movies: [],
  allMovies: [],
};
export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<{ movies: MovieResponse[] }>) => {
      state.movies = action.payload.movies;
      state.allMovies = action.payload.movies;
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
      state.allMovies = state.allMovies.filter(
        (movie) => movie.id !== action.payload.movieId,
      );
    },
    filterMoviesByCategories: (
      state,
      action: PayloadAction<{ catergories: string[] }>,
    ) => {
      if (!action.payload.catergories.length) {
        state.movies = state.allMovies;
        return;
      }
      state.movies = state.allMovies.filter((movie) =>
        action.payload.catergories.includes(movie.category),
      );
    },
  },
});

export const {
  setMovies,
  likeMovie,
  dislikeMovie,
  deleteMovie,
  filterMoviesByCategories,
} = moviesSlice.actions;

export default moviesSlice.reducer;
