import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service';
import { SortFilterStateService } from '../../services/state-storage.service';
import { AuthService } from '../../../auth/services/auth.service';
import { FormControl } from '@angular/forms';
import { combineLatest, debounceTime, distinctUntilChanged, filter, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DEBOUNCE_TIME, MIN_LETTERS_FOR_SEARCH } from '../../../app.consts';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getVideoAction } from '../../../redux/actions/actions';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchFieldControl: FormControl = new FormControl('');

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly loaderService: LoaderService,
    private readonly searchService: SearchService,
    private readonly sortFilterStateService: SortFilterStateService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private store: Store
  ) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    combineLatest([this.authService.isLogOut$, this.searchFieldControl.valueChanges])
      .pipe(
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged(),
        filter(() => this.router.url.includes('home')),
        filter(([isLogOut, searchField]) => !isLogOut && searchField.length >= MIN_LETTERS_FOR_SEARCH),
        tap(() => this.loaderService.toggleIsLoading()),
        switchMap(([_isLogOut, searchField]) => this.searchService.getSearchResults(searchField.toLowerCase().trim())),
        tap((searchResp) => {
          const ids = searchResp.items.map((item) => item.id.videoId);
          this.store.dispatch(getVideoAction({ videoIds: ids }));
          this.loaderService.toggleIsLoading();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
