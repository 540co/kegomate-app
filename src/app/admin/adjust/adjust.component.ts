import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss']
})

export class AdjustComponent implements OnInit {
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

