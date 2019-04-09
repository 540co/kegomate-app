import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss']
})

export class AdjustComponent implements OnInit {
  public kegs: any[] = [
    {number: 'Select'},
    {number:'One'},
    {number:'Two'},
    {number:'Three'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

