// const initialState = {
//   urls: null,
//   loading: false,
//   error: null
// };

import { createSelector } from 'reselect';

export const selectUrl = (state) => state.url || {};

export const selectUrls = createSelector(selectUrl, (url) => {
  return url.urls;
});

export const selectLoading = createSelector(selectUrl, (url) => {
  return url.loading;
});
export const selectCurrentUrl = createSelector(selectUrl, (url) => {
  return url.currentUrl;
});
export const selectError = createSelector(selectUrl, (url) => {
  return url.error;
});
