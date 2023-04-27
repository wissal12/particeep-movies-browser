import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movies.slice';

export const store = configureStore({
  reducer: {
    moviesStore: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
