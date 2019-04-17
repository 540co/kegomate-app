import { Component, OnInit } from '@angular/core';
import { KegomateService } from 'src/app/services/kegomate.service';

import { MatDialog } from '@angular/material';
import { ChangeDialog } from '../dialogs/change.component';

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.scss']
})

export class KegsComponent implements OnInit {
  public activeKegs: any = null;

  constructor(public dialog: MatDialog, public kegomateService: KegomateService) { }

  ngOnInit() {
    this.getActiveKegs();
  }

  getActiveKegs() {
    this.kegomateService.getActiveKegs().subscribe(
      (data: any) => {
        this.activeKegs = data;
      },
      err => console.error(err)
    );
  }

  openChangeDialog(keg): void {
    let dialogRef = this.dialog.open(ChangeDialog, {
      data: { keg: keg },
      minWidth: '40%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isNewCoffee == true) { // Add coffee then change keg
          this.kegomateService.addCoffee(result.newCoffee).subscribe((newCoffee: any) => {
            const newCoffeeId = newCoffee.insertedId.$oid;
            const updateKeg = { activeKeg: keg, coffeeId: newCoffeeId };
            this.kegomateService.changeKeg(updateKeg).subscribe((data) => {
              this.getActiveKegs();
            });
          },
            err => console.error(err)
          );
        } else { // Just change keg
          const updateKeg = { activeKeg: keg, coffeeId: result.selectedCoffee._id.$oid }
          this.kegomateService.changeKeg(updateKeg).subscribe((data) => {
            this.getActiveKegs();
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
  templateUrl: '../dialogs/adjust.html',
})
export class AdjustDialog implements OnInit {
  public availableCoffees: any = [];
  public adjustLevel: any = {
    selectedCoffee: {},
    newLevel: {}
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
  selector: 'notify-dialog',
  templateUrl: '../dialogs/notify.html',
})
/*export class NotifyDialog implements OnInit {
  public availableCoffees: any = [];
  public notification: any = {
    selectedCoffee: {},
    notification: {}
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
*/
export class NotifyDialog {
  constructor() { }
}
