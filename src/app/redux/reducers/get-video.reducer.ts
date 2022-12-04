import { createReducer, on } from '@ngrx/store';
import { API_VIDEO_LIST, IVideoList } from '../state.model';
import { clearVideoResultsAction, createVideoRespSuccess } from '../actions/actions';

export const initialState: IVideoList = {
  [API_VIDEO_LIST]: null,
};

export const videoReducer = createReducer(
  initialState,
  on(
    createVideoRespSuccess,
    (state, result): IVideoList => ({
      ...state,
      [API_VIDEO_LIST]: result,
    })
  ),
  on(
    clearVideoResultsAction,
    (state): IVideoList => ({
      ...state,
      [API_VIDEO_LIST]: null,
    })
  )
);
