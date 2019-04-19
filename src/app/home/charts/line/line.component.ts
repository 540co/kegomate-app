import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kegomate-line-chart',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  results: any[] = [ { "name": "Big Blue", "series": [ { "name": "2010", "value": 150 }, { "name": "2011", "value": 20 } ] }, { "name": "NomNom", "series": [ { "name": "2010", "value": 25 }, { "name": "2011", "value": 80 } ] } ];
  // options
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

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
