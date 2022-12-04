import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SortFilterStateService } from '../../services/state-storage.service';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  public sortingActive$ = this.sortFilterStateService.sortingActive$;

  public isLoading$ = this.loaderService.isLoading$;

  constructor(public sortFilterStateService: SortFilterStateService, public loaderService: LoaderService) {}
}
