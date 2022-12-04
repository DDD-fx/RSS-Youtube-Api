export type TSortFilterCriterion = {
  date: TSortCriterion;
  views: TSortCriterion;
  byWord: string;
};

export type TSortCriterion = 'ascending' | 'descending' | null;
