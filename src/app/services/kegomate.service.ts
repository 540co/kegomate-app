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

  constructor() { }

  public activeKegs: any[] = [
    { kegId: 1, coffee: { brand: "Snowing In Space", name: "NomNom" }, timeTapped: "2019-04-09T19:39:53", timeKicked: null, estRemaining: 90, uses: 1 },
    { kegId: 2, coffee: { brand: "Snowing In Space", name: "Big Blue" }, timeTapped: "2019-04-08T19:39:53", timeKicked: null, estRemaining: 70, uses: 4 },
    { kegId: 3, coffee: { brand: "Snowing In Space", name: "Gimme Dat!" }, timeTapped: "2019-04-07T19:39:53", timeKicked: null, estRemaining: 15, uses: 18 }
  ];

  public activity: any[] = [
    { coffee: { name: "NomNom" }, volume: 10, user: { name: "A guest" }, time: "1 minute ago" },
    { coffee: { name: "Gimme Dat!" }, volume: 8, user: { name: "A guest" }, time: "9 minutes ago" },
    { coffee: { name: "NomNom" }, volume: 4, user: { name: "A guest" }, time: "19 minutes ago" },
    { coffee: { name: "Big Blue" }, volume: 10, user: { name: "A guest" }, time: "34 minutes ago" }
  ];

  getActiveKegs () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    // return this.http.get(this.baseUrl + '/setup', httpOptions);
    return new Promise((resolve) => resolve(this.activeKegs));
  }

  getRecentActivity () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    // return this.http.get(this.baseUrl + '/activity', httpOptions);
    return new Promise((resolve) => resolve(this.activity));
  }
}
