import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { MovieResponse } from '../../api/types';

import * as S from './Movies.style';
import { LikeDislikeIcon } from '../LikeDislikeIcon';
import { useDispatch } from 'react-redux';
import {
  deleteMovie,
  dislikeMovie,
  likeMovie,
} from '../../redux-store/movies/movies.slice';

interface MovieProps {
  movie: MovieResponse;
}

export const Movie: React.FC<MovieProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const likesRatio = movie.likes / (movie.likes + movie.dislikes);
  return (
    <S.MovieCard>
      <S.DeleteButton
        onClick={() => dispatch(deleteMovie({ movieId: movie.id }))}
      >
        delete
      </S.DeleteButton>
      <S.MovieTitle area='title'>Title: {movie.title}</S.MovieTitle>
      <S.MovieCategory area='category'>
        <b>Category:</b> {movie.category}
      </S.MovieCategory>
      <S.MovieLikesRatio area='ratio'>
        <GaugeChart animate={false} percent={likesRatio} />
        <div style={{ display: 'flex' }}>
          <LikeDislikeIcon
            onClick={() => dispatch(likeMovie({ movieId: movie.id }))}
            kind='like'
          />
          <LikeDislikeIcon
            onClick={() => dispatch(dislikeMovie({ movieId: movie.id }))}
            kind='dislike'
          />
        </div>
      </S.MovieLikesRatio>
    </S.MovieCard>
  );
};
