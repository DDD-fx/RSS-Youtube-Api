import { Injectable } from '@angular/core';
import { TSortFilterCriterion } from '../models/sorting.model';
import { DEFAULT_SORT_CONFIG } from '../../app.consts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortFilterStateService {
  public sortingActive$ = new BehaviorSubject(false);

  public sortingActive: boolean = false;

  public sortFilterConfig$ = new BehaviorSubject(DEFAULT_SORT_CONFIG);

  toggleSortingPanel(): void {
    this.sortingActive = !this.sortingActive;
    this.sortingActive$.next(this.sortingActive);
  }

  disableSortingPanel(): void {
    this.sortingActive = false;
    this.sortingActive$.next(this.sortingActive);
  }

  updateSortFilter(params: TSortFilterCriterion) {
    this.sortFilterConfig$.next(params);
  }
}
