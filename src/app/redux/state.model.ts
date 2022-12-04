import { TVideoListResponse } from '../youtube/models/search-response.model';
import { TNewCardForm } from '../shared/models/create-card.model';

export const VIDEO_KEY = 'videos';
export const API_VIDEO_LIST = 'videoList';
export const CUSTOM_VIDEO = 'customVideo';
export const CUSTOM_VIDEO_DATA = 'customVideoData';

export interface IState {
  [VIDEO_KEY]: IVideoList;
  [CUSTOM_VIDEO]: ICustomVideo;
}

export interface IVideoList {
  [API_VIDEO_LIST]: TVideoListResponse | null;
}

export interface ICustomVideo {
  [CUSTOM_VIDEO_DATA]: TNewCardForm[];
}
