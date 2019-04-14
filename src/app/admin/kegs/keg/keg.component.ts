import { Component, OnInit, Input, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { KegomateService } from 'src/app/services/kegomate.service';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.scss']
})
export class KegComponent implements OnInit {
  @Input() kegDetails: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  doSomething(kegNumber) {
    console.log("This was called on keg " + kegNumber);
  }

  openDialog(type): void {
    let dialogRef;
    if(type === 'change') {
      dialogRef = this.dialog.open(ChangeDialog, {
        minWidth: '40%'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed: ', result);
      });
    } else if (type === 'adjust') {
      dialogRef = this.dialog.open(AdjustDialog, {
        minWidth: '40%'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed: ', result);
      });
    } else {
      dialogRef = this.dialog.open(NotifyDialog, {
        minWidth: '40%'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed: ', result);
      });
    }
  }
}

@Component({
  selector: 'change-dialog',
  templateUrl: '../../dialogs/change.html',
})
export class ChangeDialog implements OnInit {
  public availableCoffees: any = [];
  public changeKeg: any = {
    isNewCoffee: false,
    selectedCoffee: {},
    newCoffee: {}
  };
  
  constructor(public kegomateService: KegomateService) { }

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

@Component({
  selector: 'adjust-dialog',
  templateUrl: '../../dialogs/adjust.html',
})
export class AdjustDialog {
  constructor() { }
}

@Component({
  selector: 'notify-dialog',
  templateUrl: '../../dialogs/notify.html',
})
export class NotifyDialog {
  constructor() { }
}
