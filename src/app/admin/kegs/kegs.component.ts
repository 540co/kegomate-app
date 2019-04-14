import { Component, OnInit } from '@angular/core';
import { KegomateService } from 'src/app/services/kegomate.service';

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.scss']
})

export class KegsComponent implements OnInit {
  //public kegs: any[] = [
  //  {id:1, name:'NomNom',brand:'Snowing in Space Coffe Co'},
  //  {id:2, name:'Big Blue',brand:'Snowing in Space Coffe Co'},
  //  {id:3, name:'Gimme Dat!',brand:'Snowing in Space Coffe Co'}
  //];
  public activeKegs: any = null;

  constructor(private kegomateServive: KegomateService) { }

  ngOnInit() {
    this.getActiveKegs();
  }

  getActiveKegs() {
    this.kegomateServive.getActiveKegs().subscribe(
      (data: any) => {
        this.activeKegs = data;
      },
      err => console.error(err)
    );
  }
}
