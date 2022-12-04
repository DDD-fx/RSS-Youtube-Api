import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SortFilterStateService } from '../../../youtube/services/state-storage.service';
import { AuthService } from '../../../auth/services/auth.service';
import { DEFAULT_SORT_CONFIG } from '../../../app.consts';
import { Store } from '@ngrx/store';
import { clearVideoResultsAction } from '../../../redux/actions/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public userName$ = this.authService.userName$;

  public isLogOut$ = this.authService.isLogOut$;

  constructor(
    private readonly sortFilterStateService: SortFilterStateService,
    private readonly authService: AuthService,
    private store: Store
  ) {}

  toggleSortingPanel(): void {
    this.sortFilterStateService.toggleSortingPanel();
  }

  onLogOutClick(): void {
    if (!this.isLogOut$.value) {
      this.authService.onLogOut();
    }
  }

  goHome(): void {
    this.store.dispatch(clearVideoResultsAction());
    this.sortFilterStateService.updateSortFilter(DEFAULT_SORT_CONFIG);
    this.sortFilterStateService.disableSortingPanel();
    this.sortFilterStateService.sortingActive = false;
  }
}
