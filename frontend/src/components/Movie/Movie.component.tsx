import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { MovieResponse } from '../../api/types';

import * as S from './Movies.style';
import { LikeDislikeIcon } from '../LikeDislikeIcon';

interface MovieProps {
  movie: MovieResponse;
}

export const Movie: React.FC<MovieProps> = ({ movie }) => {
  const likesRatio = movie.likes / (movie.likes + movie.dislikes);
  return (
    <S.MovieCard>
      <S.MovieTitle area='title'>{movie.title}</S.MovieTitle>
      <S.MovieCardArea area='category'>{movie.category}</S.MovieCardArea>
      <S.MovieLikesRatio area='ratio'>
        <GaugeChart percent={likesRatio} />
        <div style={{ display: 'flex' }}>
          <LikeDislikeIcon kind='like' filled />
          <LikeDislikeIcon kind='dislike' filled />
        </div>
      </S.MovieLikesRatio>
    </S.MovieCard>
  );
};
