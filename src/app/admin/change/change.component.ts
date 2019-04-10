import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  public kegs: any[] = [
    {id: 'Select'},
    {id:1},
    {id:2},
    {id:3}
  ];
  constructor() { }

  ngOnInit() {
  }

}
