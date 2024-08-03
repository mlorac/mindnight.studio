import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { environment } from 'md-data/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) { }

  getCases(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${environment.urlApiData}cases.json`);
  }
}
