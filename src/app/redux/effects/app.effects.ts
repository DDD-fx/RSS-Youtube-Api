import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchService } from '../../youtube/services/search-service';
import { createVideoRespSuccess, getVideoAction } from '../actions/actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private searchService: SearchService) {}

  getVideosInfo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getVideoAction),
        switchMap((action) =>
          this.searchService.getVideoIdSearchResults(action.videoIds).pipe(map((resp) => createVideoRespSuccess(resp)))
        )
      );
    }
    // { dispatch: false }
  );
}
