export type TSearchListResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: TPageInfo;
  items: TSearchListResponseItem[];
};

type TPageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

type TSearchListResponseItem = {
  kind: string;
  etag: string;
  id: TSearchListResponseId;
};

export type TSearchListResponseId = {
  kind: string;
  videoId: string;
};

export type TVideoListResponse = {
  kind: string;
  etag: string;
  items: TVideoListResponseItem[];
};

export type TVideoListResponseItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: TSnippet;
  statistics: TStatistics;
};

type TSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: TThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: TLocalized;
  defaultAudioLanguage: string;
};

type TThumbnailsResolution = 'default' | 'medium' | 'high' | 'standard' | 'maxres';

type TThumbnailsAll = {
  [key in TThumbnailsResolution]: TThumbnailsProps;
};

type TThumbnails = MakeOptional<TThumbnailsAll, 'maxres'>;

type TThumbnailsProps = {
  url: string;
  width: number;
  height: number;
};

type TLocalized = {
  title: string;
  description: string;
};

type TStatistics = {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
};

type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;
