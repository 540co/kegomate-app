import { Component, OnInit } from '@angular/core';

import { KegomateService } from 'src/app/services/kegomate.service';

import * as moment from 'moment';
import * as shape from 'd3-shape';

@Component({
  selector: 'kegomate-line-chart',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  // Chart configuration
  results: any[] = [];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition = 'below';
  showXAxisLabel = false;
  showYAxisLabel = false;
  curve = shape.curveMonotoneX;
  colorScheme = {
    domain: ['#000000', '#965f37', '#c09f87']
  };

  constructor(private kegomateServive: KegomateService) { }

  ngOnInit() {
    this.getReportData();
  }

  onSelect(event) {
    console.log(event);
  }

  getReportData() {
    let seriesData = [];
    let date = moment();
    while(seriesData.length < 11) {
      if (date.day() > 0 && date.day() < 6) {
        seriesData.push({ name: date.format("YYYY-MM-DD"), value: 0 });
      }
      date = date.subtract(1, 'days');
    }
    seriesData.reverse();
    const results = [];
    let keg0data = { name: "keg0", series: [] };
    let keg1data = { name: "keg1", series: [] };
    let keg2data = { name: "keg2", series: [] };
    this.kegomateServive.getReports().subscribe(
      (data: any) => {
        const keg0 = data.dailyCounts.filter(entry => {
          return entry._id.keg === 'keg0';
        });
        seriesData.forEach(date => {
          var found = keg0.find(drink => date.name === drink._id.yearMonthDay);
          if (found) {
            keg0data.series.push({ name: found._id.yearMonthDay, value: parseInt(found.dailyTotal.$numberDouble) });
          } else {
            keg0data.series.push({ name: date.name, value: 0 });
          }
        });
        const keg1 = data.dailyCounts.filter(entry => {
          return entry._id.keg === 'keg1';
        });
        seriesData.forEach(date => {
          var found = keg1.find(drink => date.name === drink._id.yearMonthDay);
          if (found) {
            keg1data.series.push({ name: found._id.yearMonthDay, value: parseInt(found.dailyTotal.$numberDouble) });
          } else {
            keg1data.series.push({ name: date.name, value: 0 });
          }
        });
        const keg2 = data.dailyCounts.filter(entry => {
          return entry._id.keg === 'keg2';
        });
        seriesData.forEach(date => {
          var found = keg2.find(drink => date.name === drink._id.yearMonthDay);
          if (found) {
            keg2data.series.push({ name: found._id.yearMonthDay, value: parseInt(found.dailyTotal.$numberDouble) });
          } else {
            keg2data.series.push({ name: date.name, value: 0 });
          }
        });
        results.push(keg0data, keg1data, keg2data);
        this.results = results;
      },
      err => console.error(err)
    );
  }

}
