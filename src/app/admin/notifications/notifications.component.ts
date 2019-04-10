import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public people: any[] = [
    {name: 'Select'},
    {name:'Everyone'},
    {name:'Other'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
