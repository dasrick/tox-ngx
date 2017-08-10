import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ApiService} from '../core/api.service';

import {OffersetupModel} from './models';

@Injectable()
export class OffersetupsService {

  private path: string;

  constructor(private apiService: ApiService) {
    this.path = '/offersetups';
  }

  getAll(): Observable<OffersetupModel[]> {
    return this.apiService.get(this.path)
      .map(data => data);
  }

  get(id): Observable<OffersetupModel> {
    return this.apiService.get(this.path + '/' + id)
      .map(data => data.offersetup);
  }

  save(offersetup): Observable<OffersetupModel> {
    // If we're updating an existing article
    if (offersetup.id) {
      return this.apiService.put(this.path + '/' + offersetup.id, {offersetup: offersetup})
        .map(data => data.offersetup);

      // Otherwise, create a new article
    } else {
      return this.apiService.post(this.path, {offersetup: offersetup})
        .map(data => data.offersetup);
    }
  }

  // DO NOT IMPLEMENT IT YET
  // destroy(slug) {
  //   return this.apiService.delete('/articles/' + slug);
  // }

}
