import { Component, OnInit } from '@angular/core';

import { KegomateService } from 'src/app/services/kegomate.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public activity: any = null;
  public hypeReading: Number = null;

  constructor(private kegomateServive: KegomateService) { }

  ngOnInit() {
    this.getRecentActivity();
    this.getHypeMeterReading();
  }

  getRecentActivity() {
    this.kegomateServive.getRecentActivity().subscribe(
      (data: any) => {
        this.activity =  data;
      },
      err => console.error(err)
    );
  }

  getHypeMeterReading() {
    this.kegomateServive.getReports().subscribe(
      (data: any) => {
        this.hypeReading =  data.hypeMeter[0].dailyTotal.$numberDouble;
      },
      err => console.error(err)
    );
  }

}
