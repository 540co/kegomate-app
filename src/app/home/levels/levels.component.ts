import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  public activeKegs: any[] = [
    { id: 1, name: "NomNom", brand: "Counter Culture", percentRemaining: 70 },
    { id: 2, name: "Big Blue", brand: "Snowing in Space", percentRemaining: 20 },
    { id: 3, name: "Something else..", brand: "Starbucks", percentRemaining: 50 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
