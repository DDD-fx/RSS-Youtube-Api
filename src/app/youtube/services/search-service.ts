import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TSearchListResponse, TVideoListResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchData$ = new BehaviorSubject<TVideoListResponse | null>(null);

  private inputSearchReq = 'search?maxResults=10&q=';

  private idSearchReq = 'videos?part=snippet%2Cstatistics';

  constructor(private httpClient: HttpClient) {}

  getSearchResults(searchFieldData: string): Observable<TSearchListResponse> {
    return this.httpClient.get<TSearchListResponse>(`${this.inputSearchReq}${searchFieldData}`);
  }

  getVideoIdSearchResults(ids: string[]): Observable<TVideoListResponse> {
    let params = new HttpParams({
      fromObject: { id: ids },
    });
    return this.httpClient.get<TVideoListResponse>(`${this.idSearchReq}`, { params });
  }

  // setSearchData(searchResult: TVideoListResponse | null): void {
  //   this.searchData$.next(searchResult);
  // }
}
