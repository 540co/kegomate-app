import { Component, OnInit } from '@angular/core';

import { KegomateService } from 'src/app/services/kegomate.service';
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
    const results = [];
    const keg0data = { name: "keg0", series: [] };
    const keg1data = { name: "keg1", series: [] };
    const keg2data = { name: "keg2", series: [] };
    this.kegomateServive.getReports().subscribe(
      (data: any) => {
        const keg0 = data.dailyCounts.filter(entry => {
          return entry._id.keg === 'keg0';
        }).forEach(drink => {
          keg0data.series.push({ name: drink._id.yearMonthDay, value: parseInt(drink.dailyTotal.$numberDouble) })
        });;
        const keg1 = data.dailyCounts.filter(entry => {
          return entry._id.keg === 'keg1';
        }).forEach(drink => {
          keg1data.series.push({ name: drink._id.yearMonthDay, value: parseInt(drink.dailyTotal.$numberDouble) })
        });;
        const keg2 = data.dailyCounts.filter(entry => {
          return entry._id.keg === 'keg2';
        }).forEach(drink => {
          keg2data.series.push({ name: drink._id.yearMonthDay, value: parseInt(drink.dailyTotal.$numberDouble) })
        });
        results.push(keg0data, keg1data, keg2data);
        this.results = results;
      },
      err => console.error(err)
    );
  }

}
