import { ECardColors } from '../../app.enums';

export type TNewCardForm = {
  id: number;
  title: string;
  description: string;
  img: string;
  videoLink: string;
  date: string;
  color: ECardColors;
};
