import { createAction, props } from '@ngrx/store';
import { TVideoListResponse } from '../../youtube/models/search-response.model';
import { TNewCardForm } from '../../shared/models/create-card.model';

export const GET_VIDEOS = '[VIDEO] get videos search result';
export const CREATE_VIDEO_RESP_SUCCESS = '[VIDEO] search result success';
export const CLEAR_VIDEO_RESULTS = '[VIDEO] clear results';
export const CREATE_NEW_VIDEO = '[CUSTOM VIDEO] create new video';

export const getVideoAction = createAction(GET_VIDEOS, props<{ videoIds: string[] }>());
export const createVideoRespSuccess = createAction(CREATE_VIDEO_RESP_SUCCESS, props<TVideoListResponse>());
export const clearVideoResultsAction = createAction(CLEAR_VIDEO_RESULTS);
export const createNewVideoAction = createAction(CREATE_NEW_VIDEO, props<{ payload: TNewCardForm }>());
