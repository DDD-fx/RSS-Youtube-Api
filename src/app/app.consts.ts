import { TSortFilterCriterion } from './youtube/models/sorting.model';

export const DEFAULT_SORT_CONFIG: TSortFilterCriterion = {
  date: null,
  views: null,
  byWord: '',
};

export const MILLISECONDS_IN_DAY = 86400000;
export const MIN_NUMBER_OF_DAYS_FOR_GREEN_CARD = 7;
export const MIN_NUMBER_OF_DAYS_FOR_YELLOW_CARD = 30;
export const MIN_NUMBER_OF_DAYS_FOR_RED_CARD = 180;
export const DEBOUNCE_TIME = 700;
export const MIN_LETTERS_FOR_SEARCH = 3;

export const specialSymbols = /[!@#$%^&*()_+\-=<>?{}\[\]|\\/]/;
export const upperCaseSymbols = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
export const lowerCaseSymbols = /[abcdefghijklmnopqrstuvwxyz]/;
export const nums = /[1234567890]/;
export const urlValidationRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
