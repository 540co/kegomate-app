import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class KegomateService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getActiveKegs () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/get_setup?secret=kegomate_development_secret', httpOptions);
  }

  getRecentActivity () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/get_drinks?secret=kegomate_development_secret', httpOptions);
  }

  addCoffee (newCoffee) {
    const body = {
      name: newCoffee.name,
      brand: newCoffee.brand,
      notes: newCoffee.notes,
      caffeine: newCoffee.caffeine
    }
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/post_coffee?secret=kegomate_development_secret', body, httpOptions);
  }

  getCoffees () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/get_coffee?secret=kegomate_development_secret', httpOptions);
  }

  getUsers () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/get_users?secret=kegomate_development_secret', httpOptions);
  }

  changeKeg (updateKeg) {
    const body = {
      activeKeg: updateKeg.activeKeg,
      coffeeId: updateKeg.coffeeId
    };
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/update_setup?secret=kegomate_development_secret', body, httpOptions);
  }
  adjustLevel (updateLevel) {
    const body = {
      adjustedVolume: updateLevel.adjLevel,
      tapId: updateLevel.activeKeg
    };
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.put('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/update_level?secret=kegomate_development_secret', body, httpOptions);
  }
}
