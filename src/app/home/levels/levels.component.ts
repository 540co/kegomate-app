import { Component, OnInit } from '@angular/core';

import { KegomateService } from 'src/app/services/kegomate.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  public activeKegs: any = null;

  constructor(private kegomateServive: KegomateService) { }

  ngOnInit() {
    this.getActiveKegs();
  }

  getActiveKegs() {
    this.kegomateServive.getActiveKegs().then(
      (data: any) => {
        this.activeKegs =  data;
      },
      err => console.error(err)
    );
  }

}
