import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TDescriptionCard } from '../../models/cards.model';
import { getCardColor } from '../../../shared/utils';
import { Location } from '@angular/common';
import { SearchService } from '../../services/search-service';
import { TVideoListResponseItem } from '../../models/search-response.model';
import { map, takeWhile, tap } from 'rxjs';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedInfoPageComponent implements OnInit {
  public currCardData!: TDescriptionCard;

  public isLoading$ = this.loaderService.isLoading$;

  constructor(
    private readonly loaderService: LoaderService,
    private route: ActivatedRoute,
    private location: Location,
    private searchService: SearchService,
    private readonly router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    let currCardId: string = '';
    this.route.params.subscribe((params) => (currCardId = params['id']));
    if (currCardId) {
      this.loaderService.toggleIsLoading();
      this.searchService
        .getVideoIdSearchResults([currCardId])
        .pipe(
          map((resp) => {
            if (resp.items.length === 0) void this.router.navigate(['**'], { skipLocationChange: true });
            return resp;
          }),
          tap(() => this.loaderService.toggleIsLoading()),
          takeWhile((resp) => resp.items.length > 0)
        )
        .subscribe((currCardData) => {
          this.currCardData = this.mappedCurrCardData(currCardData.items[0]);
          this.changeDetector.detectChanges();
        });
    }
  }

  mappedCurrCardData(currCard: TVideoListResponseItem): TDescriptionCard {
    return {
      image: currCard.snippet.thumbnails.standard.url,
      views: +currCard.statistics.viewCount,
      likes: +currCard.statistics.likeCount,
      comments: +currCard.statistics.commentCount,
      title: currCard.snippet.title,
      videoLink: currCard.id,
      color: getCardColor(currCard.snippet.publishedAt),
      date: currCard.snippet.publishedAt,
      description: currCard.snippet.description,
    };
  }

  goBack(): void {
    this.location.back();
  }
}
