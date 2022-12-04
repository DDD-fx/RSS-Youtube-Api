import { createFeatureSelector, createSelector } from '@ngrx/store';
import { API_VIDEO_LIST, CUSTOM_VIDEO, CUSTOM_VIDEO_DATA, ICustomVideo, IVideoList, VIDEO_KEY } from '../state.model';

export const selectVideosSelector = createFeatureSelector<IVideoList>(VIDEO_KEY);
export const selectVideoListSelector = createSelector(selectVideosSelector, (state) => {
  return state[API_VIDEO_LIST]?.items;
});

export const selectCustomVideoSelector = createFeatureSelector<ICustomVideo>(CUSTOM_VIDEO);
export const selectCustomVideoDataSelector = createSelector(selectCustomVideoSelector, (state) => {
  return state[CUSTOM_VIDEO_DATA];
});
