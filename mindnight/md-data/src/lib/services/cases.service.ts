import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  url = '/assets/data/cases.json';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  getCases(): Promise<MenuItem[]> {
    return fetch(this.url)
    .then(res => res.json())
    .then((json: MenuItem[]) => {
      return json;
    });
  }
}
