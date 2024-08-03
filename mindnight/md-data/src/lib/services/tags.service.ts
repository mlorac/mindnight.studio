import { inject, Injectable } from '@angular/core';
import { TagModel } from '../models/tags.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'md-data/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TagsService {

  //http = inject(HttpClient);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}

  getTags(): Observable<TagModel[]> {
    return this.http.get<TagModel[]>(`${environment.urlApiData}tags.json`);
  }
}
