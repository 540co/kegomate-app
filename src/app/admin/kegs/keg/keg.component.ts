import { Component, OnInit, Input, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { KegomateService } from 'src/app/services/kegomate.service';

import { ChangeDialog } from '../../dialogs/change.component';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.scss']
})
export class KegComponent implements OnInit {
  @Input() kegDetails: any;

  constructor(public dialog: MatDialog, public kegomateService: KegomateService) { }

  ngOnInit() {
  }

  openChangeDialog(type, keg): void {
    let dialogRef = this.dialog.open(ChangeDialog, {
      minWidth: '40%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isNewCoffee == true) { // Add coffee then change keg
          this.kegomateService.addCoffee(result.newCoffee).subscribe((newCoffee: any) => {
            const newCoffeeId = newCoffee.insertedId.$oid;
            const updateKeg = { activeKeg: keg, coffeeId: newCoffeeId };
            this.kegomateService.changeKeg(updateKeg).subscribe((data) => {
              console.log("ADDED COFFEE AND UPDATE!!!!!");
            });
          },
            err => console.error(err)
          );
        } else { // Just change keg
          const updateKeg = { activeKeg: keg, coffeeId: result.selectedCoffee._id.$oid }
          this.kegomateService.changeKeg(updateKeg).subscribe((data) => {
            console.log("ADDED UPDATED!!!!!");
          });
        }
      }
    });
  }

  openAdjustDialog(type, keg): void {
    let dialogRef = this.dialog.open(AdjustDialog, {
      minWidth: '40%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
    });
  }

  openNotifyDialog(type, keg): void {
    let dialogRef = this.dialog.open(NotifyDialog, {
      minWidth: '40%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
    });
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
