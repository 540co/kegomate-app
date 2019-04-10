import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public kegs: any[] = [
    {id: 'Select'},
    {id:1},
    {id:2},
    {id:3}
  ];
  public people: any[] = [
    {name: 'Select'},
    {name:'Everyone'},
    {name:'Other'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
