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

  getCoffees () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/get_coffee?secret=kegomate_development_secret', httpOptions);
  }

  getUsers () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kegomate-test-fnmug/service/Kegomate/incoming_webhook/get_users?secret=kegomate_development_secret', httpOptions);
  }
}
