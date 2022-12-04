import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SortFilterStateService } from '../../services/state-storage.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingComponent {
  public sortFilterConfig$ = this.sortFilterStateService.sortFilterConfig$;

  private isDateSortAsc = true;

  private isViewsSortAsc = true;

  public titleToFilter = '';

  constructor(private readonly sortFilterStateService: SortFilterStateService) {}

  sortByDate(): void {
    this.isDateSortAsc = !this.isDateSortAsc;
    this.sortFilterStateService.updateSortFilter({
      ...this.sortFilterConfig$.value,
      date: this.isDateSortAsc ? 'descending' : 'ascending',
      views: null,
    });
  }

  sortByViews(): void {
    this.isViewsSortAsc = !this.isViewsSortAsc;
    this.sortFilterStateService.updateSortFilter({
      ...this.sortFilterConfig$.value,
      date: null,
      views: this.isViewsSortAsc ? 'descending' : 'ascending',
    });
  }

  titleToFilterChanged(inputText: string): void {
    this.titleToFilter = inputText;
    this.sortFilterStateService.updateSortFilter({
      ...this.sortFilterConfig$.value,
      byWord: this.titleToFilter,
    });
  }
}
