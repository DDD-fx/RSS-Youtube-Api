import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TSmallCard } from '../../models/cards.model';
import { SortFilterStateService } from '../../services/state-storage.service';
import { getCardColor } from '../../../shared/utils';
import { TVideoListResponseItem } from '../../models/search-response.model';
import { selectCustomVideoDataSelector, selectVideoListSelector } from '../../../redux/selectors/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-result-block',
  templateUrl: './search-result-block.component.html',
  styleUrls: ['./search-result-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultBlockComponent {
  public videoList$ = this.store.select(selectVideoListSelector);

  customCardData$ = this.store.select(selectCustomVideoDataSelector);

  readonly sortFilterConfig$ = this.sortFilterStateService.sortFilterConfig$;

  constructor(public sortFilterStateService: SortFilterStateService, private store: Store) {}

  mappedSmallCardData(card: TVideoListResponseItem): TSmallCard {
    return {
      image: card.snippet.thumbnails.medium.url,
      views: +card.statistics.viewCount,
      likes: +card.statistics.likeCount,
      comments: +card.statistics.commentCount,
      title: card.snippet.title,
      videoLink: card.id,
      color: getCardColor(card.snippet.publishedAt),
    };
  }

  trackByFn(index: number, card: TVideoListResponseItem): string {
    return card.etag;
  }
}
