import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  @Input() kegDetails: any;

  constructor() { }

  ngOnInit() {
  }

}
