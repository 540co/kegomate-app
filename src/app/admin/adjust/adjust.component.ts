import { Component, OnInit } from '@angular/core';
import { KegomateService } from 'src/app/services/kegomate.service';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss']
})

export class AdjustComponent implements OnInit {
 // public kegs: any[] = [
 //   {id: 'Select'},
 //   {id:1},
 //   {id:2},
 //   {id:3}
 // ];
 public activeKegs: any = null;

 constructor(private kegomateServive: KegomateService) { }

 ngOnInit() {
   this.getActiveKegs();
 }

 getActiveKegs() {
   this.kegomateServive.getActiveKegs().subscribe(
     (data: any) => {
       this.activeKegs =  data;
     },
     err => console.error(err)
   );
 }

}

