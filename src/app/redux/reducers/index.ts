import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { CUSTOM_VIDEO, IState, VIDEO_KEY } from '../state.model';
import { videoReducer } from './get-video.reducer';
import { customVideoReducer } from './create-custom-video.reducer';

export const reducers: ActionReducerMap<IState> = {
  [VIDEO_KEY]: videoReducer,
  [CUSTOM_VIDEO]: customVideoReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
