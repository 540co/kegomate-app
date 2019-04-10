import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.scss']
})
export class KegComponent implements OnInit {
  //@Input() keg:any;
  @Input() kegDetails: any;
  constructor() { }

  ngOnInit() {
  }

  doSomething(kegNumber) {
    console.log("This was called on keg " + kegNumber);
  }

}
