import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.scss']
  })

export class KegsComponent implements OnInit {
  public kegs: any[] = [
	  {number:'One', name:'NomNom',brand:'Snowing in Space Coffe Co'},
    {number:'Two', name:'Gimme Dat!',brand:'Snowing in Space Coffe Co'},
    {number:'Three', name:'Mexican Chiapas',brand:'Black Hand'}
  ];
  constructor() { }

  ngOnInit() {
  }
}