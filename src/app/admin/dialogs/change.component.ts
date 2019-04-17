import { Component, OnInit, Input, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material';

import { KegomateService } from 'src/app/services/kegomate.service';


@Component({
  selector: 'change-dialog',
  templateUrl: './change.html',
})
export class ChangeDialog implements OnInit {
  public availableCoffees: any = [];
  public changeKeg: any = {
    isNewCoffee: false,
    selectedCoffee: {},
    newCoffee: {}
  };
  
  constructor(public kegomateService: KegomateService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getAvailableCoffees();
  }

  getAvailableCoffees() {
    this.kegomateService.getCoffees().subscribe(
      (data: any) => {
        this.availableCoffees =  data;
      },
      err => console.error(err)
    );
  }
}