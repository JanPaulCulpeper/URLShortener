import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

export const selectAuthToken = createSelector(selectAuth, (auth) => {
  return auth.authToken;
});

export const selectError = createSelector(selectAuth, (auth) => {
  return auth.error;
});
