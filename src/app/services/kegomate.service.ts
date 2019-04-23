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
  private secret = environment.apiSecret;

  constructor(private http: HttpClient) { }

  getActiveKegs () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get(this.baseUrl + '/get_setup?secret=' + this.secret, httpOptions);
  }

  getRecentActivity () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get(this.baseUrl + '/get_drinks?secret=' + this.secret, httpOptions);
  }

  addCoffee (newCoffee) {
    const body = {
      name: newCoffee.name,
      brand: newCoffee.brand,
      notes: newCoffee.notes,
      caffeine: newCoffee.caffeine
    }
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.post(this.baseUrl + '/post_coffee?secret=' + this.secret, body, httpOptions);
  }

  getCoffees () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get(this.baseUrl + '/get_coffee?secret=' + this.secret, httpOptions);
  }

  getUsers () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get(this.baseUrl + '/get_users?secret=' + this.secret, httpOptions);
  }

  changeKeg (updateKeg) {
    const body = {
      activeKeg: updateKeg.activeKeg,
      coffeeId: updateKeg.coffeeId
    };
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.post(this.baseUrl + '/update_setup?secret=' + this.secret, body, httpOptions);
  }
  
  adjustLevel (updateLevel) {
    const body = {
      adjustedVolume: updateLevel.adjLevel,
      tapId: updateLevel.activeKeg
    };
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.put(this.baseUrl + '/update_level?secret=' + this.secret, body, httpOptions);
  }

  getReports () {
    let httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
    return this.http.get(this.baseUrl + '/get_reports?secret=' + this.secret, httpOptions);
  }
}
