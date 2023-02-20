import { createReducer } from '@reduxjs/toolkit';
import { setRating } from './rating.action';

const initialState = {
  data: [],
};

const ratingReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRating, (state, action) => {
    state.data.push(action.payload);
  })
});

export default ratingReducer;
