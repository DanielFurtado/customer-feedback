import { configureStore } from '@reduxjs/toolkit';
import ratingReducer from './rating/rating.reducer';

export const store = configureStore({
  reducer: {
    feedbackList: ratingReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
