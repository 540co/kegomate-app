import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
      window.location.reload();
    }, 30000);
  }

}