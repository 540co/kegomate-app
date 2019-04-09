import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.scss']
})
export class KegComponent implements OnInit {
  @Input() keg:any;
  constructor() { }

  ngOnInit() {
  }

}
