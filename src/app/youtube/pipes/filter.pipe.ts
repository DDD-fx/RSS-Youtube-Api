import { Pipe, PipeTransform } from '@angular/core';
import { TSortFilterCriterion } from '../models/sorting.model';
import { TVideoListResponseItem } from '../models/search-response.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(searchResults: TVideoListResponseItem[], sortConfig: TSortFilterCriterion): TVideoListResponseItem[] {
    let result = searchResults.slice();
    if (sortConfig.byWord)
      result = searchResults.filter((item) =>
        item.snippet.title.toLowerCase().includes(sortConfig.byWord.toLowerCase().trim())
      );
    if (sortConfig.views || sortConfig.date) result = this.sortBy(result, sortConfig);

    return result;
  }

  sortBy(searchResults: TVideoListResponseItem[], sortConfig: TSortFilterCriterion): TVideoListResponseItem[] {
    if (sortConfig.date === 'ascending') {
      return searchResults.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    } else if (sortConfig.date === 'descending') {
      return searchResults.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    } else if (sortConfig.views === 'ascending') {
      return searchResults.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    } else if (sortConfig.views === 'descending') {
      return searchResults.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
    return searchResults;
  }
}
