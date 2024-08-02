import { Injectable } from '@angular/core';
import { TagModel } from '../models/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  url = '/assets/data/tags.json';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getTags(): Promise<TagModel[]> {
    return fetch(this.url).then(res => res.json())
    .then((json: TagModel[]) => {
      return json;
    });
  }
}
