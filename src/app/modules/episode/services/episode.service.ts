import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IEpisode, IResponseWithPagination} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(params: { page?: number }): Observable<IResponseWithPagination<IEpisode>> {
    return this.httpClient.get<IResponseWithPagination<IEpisode>>(urls.episode, {params});
  }

  getById(id: number): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`);
  }

}
