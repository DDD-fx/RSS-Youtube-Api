import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { map, takeWhile, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCustomVideoDataSelector } from '../../../redux/selectors/selectors';
import { TNewCardForm } from '../../../shared/models/create-card.model';

@Component({
  selector: 'app-custom-detailed-info',
  templateUrl: './custom-detailed-info.component.html',
  styleUrls: ['../detailed-info-page/detailed-info-page.component.scss'],
})
export class CustomDetailedInfoComponent implements OnInit {
  private currCardData$ = this.store.select(selectCustomVideoDataSelector);

  public currCardData!: TNewCardForm;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store,
    private readonly router: Router
  ) {}

  ngOnInit() {
    let currCardLink: string = '';
    this.route.params.subscribe((params) => (currCardLink = params['id']));
    this.currCardData$
      .pipe(
        map((arr) => {
          const res = arr.filter((item) => item.videoLink === currCardLink);
          if (res.length === 0) void this.router.navigate(['**'], { skipLocationChange: true });
          return res;
        }),
        tap((result) => (this.currCardData = result[0])),
        takeWhile((res) => res.length > 0)
      )
      .subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
