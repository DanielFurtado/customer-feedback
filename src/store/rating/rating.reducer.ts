import { Key } from 'react';
import { createReducer, AnyAction } from '@reduxjs/toolkit';
import { setRating } from './rating.action';

export type RatingState = {
  readonly data: RatingItem[];
};

export type RatingItem = {
  id: Key;
  name: string;
  email: string;
  rating: number;
  comment: string;
};

export const initialState: RatingState = {
  data: []
};

const ratingReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRating, (state, action: AnyAction) => {
    state.data.push(action.payload);
  })
});

export default ratingReducer;
