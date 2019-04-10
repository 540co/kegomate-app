import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.scss']
  })

export class KegsComponent implements OnInit {
  public kegs: any[] = [
	  {id:1, name:'NomNom',brand:'Snowing in Space Coffe Co'},
    {id:2, name:'Big Blue',brand:'Snowing in Space Coffe Co'},
    {id:3, name:'Gimme Dat!',brand:'Snowing in Space Coffe Co'}
  ];
  constructor() { }

  ngOnInit() {
  }
}