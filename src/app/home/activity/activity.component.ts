import { Component, OnInit } from '@angular/core';

import { KegomateService } from 'src/app/services/kegomate.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public activity: any = null;

  constructor(private kegomateServive: KegomateService) { }

  ngOnInit() {
    this.getRecentActivity();
  }

  getRecentActivity() {
    this.kegomateServive.getRecentActivity().then(
      (data: any) => {
        this.activity =  data;
      },
      err => console.error(err)
    );
  }

}
