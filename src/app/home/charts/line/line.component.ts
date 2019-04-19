import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kegomate-line-chart',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  // Chart configuration
  results: any[] = [ 
    { "name": "Big Blue", "series": [ { "name": "2010", "value": 150 }, { "name": "2011", "value": 20 }, { "name": "2012", "value": 40 }, { "name": "2013", "value": 110 } ] }, 
    { "name": "NomNom", "series": [ { "name": "2010", "value": 25 }, { "name": "2011", "value": 80 }, { "name": "2012", "value": 100 }, { "name": "2013", "value": 180 } ] },
    { "name": "Gimme Dat!", "series": [ { "name": "2010", "value": 40 }, { "name": "2011", "value": 50 }, { "name": "2012", "value": 140 }, { "name": "2013", "value": 60 } ] } 
  ];
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
