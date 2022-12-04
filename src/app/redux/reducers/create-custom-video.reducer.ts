import { CUSTOM_VIDEO_DATA, ICustomVideo } from '../state.model';
import { createReducer, on } from '@ngrx/store';
import { createNewVideoAction } from '../actions/actions';

export const initialState: ICustomVideo = {
  [CUSTOM_VIDEO_DATA]: [],
};

export const customVideoReducer = createReducer(
  initialState,
  on(
    createNewVideoAction,
    (state, action): ICustomVideo => ({
      ...state,
      [CUSTOM_VIDEO_DATA]: state[CUSTOM_VIDEO_DATA].concat([action.payload]),
    })
  )
);
