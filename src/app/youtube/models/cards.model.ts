import { ECardColors } from '../../app.enums';

export type TSmallCard = {
  image: string;
  views: number;
  likes: number;
  comments: number;
  title: string;
  videoLink: string;
  color: ECardColors;
};

export type TDescriptionCard = TSmallCard & {
  date: string;
  description: string;
};
