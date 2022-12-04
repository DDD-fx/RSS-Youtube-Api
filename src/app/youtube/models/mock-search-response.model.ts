export type TSearchResponse = {
  kind: string;
  etag: string;
  pageInfo: TPageInfo;
  items: TItem[];
};

type TPageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type TItem = {
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

type TThumbnails = {
  [key in TThumbnailsResolution]: TThumbnailsProps;
};

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
  dislikeCount?: string;
  favoriteCount: string;
  commentCount: string;
};
